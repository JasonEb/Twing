import { WS_CONNECT, WS_SEND, WS_DISCONNECT } from '../actions/websocket_actions'
import { receiveMessage } from '../actions/message_actions'

export const parseMessage = (rawMessage) => {
  let parsedMessage = {
      message: null,
      tags: null,
      command: null,
      original: rawMessage,
      channel: null,
      username: null
  };

  if (rawMessage[0] === '@') {
      let tagIndex = rawMessage.indexOf(' '),
          userIndex = rawMessage.indexOf(' ', tagIndex + 1),
          commandIndex = rawMessage.indexOf(' ', userIndex + 1),
          channelIndex = rawMessage.indexOf(' ', commandIndex + 1),
          messageIndex = rawMessage.indexOf(':', channelIndex + 1);

      parsedMessage.tags = rawMessage.slice(0, tagIndex);
      parsedMessage.username = rawMessage.slice(tagIndex + 2, rawMessage.indexOf('!'));
      parsedMessage.command = rawMessage.slice(userIndex + 1, commandIndex);
      parsedMessage.channel = rawMessage.slice(commandIndex + 1, channelIndex);
      parsedMessage.message = rawMessage.slice(messageIndex + 1);
  } else if (rawMessage.startsWith("PING")) {
      parsedMessage.command = "PING";
      parsedMessage.message = rawMessage.split(":")[1];
  }
  return parsedMessage;
}



const websocketMiddleware = store => next => action => {
  let socket = null

  const onOpen = (store, socket) => (event) => {

    console.log('websocket open')
    
    let username = 'bidoubot'
    let password = 'oauth:oasncugad4uhokjxuzr00u1o1q2daf'
    let channel = "#interpretivedashdance"
  
    if (socket !== null && socket.readyState === 1) {
        console.log('Connecting and authenticating...');
  
        socket.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
        socket.send('PASS ' + password);
        socket.send('NICK ' + username);
        socket.send('JOIN ' + channel);
    }
  
    // store.dispatch()
  }
  
  const onClose = (store, socket) => () => {
    console.log('Disconnected from the chat server.');
    // store.dispatch(actions.wsDisconnected())
  }
  
  const onMessage = (store) => (event) => {
    let message = parseMessage(event.data).message
    store.dispatch(receiveMessage(message))
  }
  
  switch (action.type) {
  // User request to connect
  case WS_CONNECT:
    if (socket !== null) {
      socket.close();
    }

    // Configure the object
    let server = 'irc-ws.chat.twitch.tv'
    let port = 443
    socket = new WebSocket('wss://' + server + ':' + port + '/', 'irc')

    // websocket handlers
    socket.onmessage = onMessage(store);
    socket.onclose = onClose(store, socket);
    socket.onopen = onOpen(store, socket);


    break

  // User request to send a message
  case WS_SEND:
    socket.send(JSON.stringify(action.payload))
    break

  // User request to disconnect
  case WS_DISCONNECT:
    socket.close()
    break

  default: // We don't really need the default but ...
    
  }

  return next(action)
}

export default websocketMiddleware