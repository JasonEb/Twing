import { WS_CONNECT, WS_SEND, WS_DISCONNECT } from '../actions/websocket_actions'
import { receiveMessage } from '../actions/message_actions'

import { parseMessage } from '../util/twitchHelperMethods'


const websocketMiddleware = store => next => action => {
  let socket = null

  const onOpen = (store, socket) => (event) => {

    console.log('websocket open')
    
    let username = 'bidoubot'
    let password = 'oauth:yfp9b5pv9dk966ldjyfk4ypk1t6p6p'
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
    store.dispatch(receiveMessage(event))
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