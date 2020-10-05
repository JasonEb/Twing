import {
  WS_CONNECT,
  WS_SEND,
  WS_DISCONNECT,
  wsDisconnect,
} from "../actions/websocket_actions";
import { receiveMessage } from "../actions/message_actions";
import { receivePoint } from "../actions/point_actions";
import { parseMessage } from "../util/twitchHelperMethods";
import { twitchOauth } from "../../config/keys";

const commandDispatcher = (dispatch, parsed) => {
  //point command
  let isPointCommand = parsed.message.startsWith(">look");
  if (isPointCommand) {
    let pointParams = parsed.message.split(" ")
    let [a, b] = pointParams
    // [a, b] = [a.trim(), b.trim()]
    a = a.trim()
    b = b.trim()
    
    if ("left right up down".split(" ").includes(b)) {
      let [x, y] = [50, 50]
      dispatch(receivePoint({ x, y, type:"eye", animation:`look_${b}` }))
    } else {
      let coord = b.split(",")
      let x = parseInt(coord[0].trim());
      let y = parseInt(coord[1].trim());
      parsed.message = `Point received: ${x}, ${y}`;
      dispatch(receivePoint({ x, y, type:"blip", animation:"blip" }));
    }
  }
};

const websocketMiddleware = (store) => (next) => (action) => {
  let socket = null;

  const onOpen = (store, socket) => (event) => {
    console.log("websocket open");

    let username = "bidoubot";
    let password = twitchOauth;
    let channel = "#interpretivedashdance";

    if (socket !== null && socket.readyState === 1) {
      console.log("Connecting and authenticating...");

      socket.send(
        "CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership"
      );
      socket.send("PASS " + password);
      socket.send("NICK " + username);
      socket.send("JOIN " + channel);
    }

    // store.dispatch()
  };

  const onClose = (store, socket) => () => {
    console.log("Disconnected from the chat server.");
    store.dispatch(wsDisconnect())
  };

  const onMessage = (store) => (event) => {
    let dispatch = store.dispatch;
    let parsed = parseMessage(event.data);

    dispatch(receiveMessage(parsed));

    commandDispatcher(dispatch, parsed);
  };

  switch (action.type) {
    // User request to connect
    case WS_CONNECT:
      if (socket !== null) {
        socket.close();
      }

      // Configure the object
      let server = "irc-ws.chat.twitch.tv";
      let port = 443;
      socket = new WebSocket("wss://" + server + ":" + port + "/", "irc");

      // websocket handlers
      socket.onmessage = onMessage(store);
      socket.onclose = onClose(store, socket);
      socket.onopen = onOpen(store, socket);

      break;

    // User request to send a message
    case WS_SEND:
      socket.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case WS_DISCONNECT:
      socket.close();
      break;

    default: // We don't really need the default but ...
  }

  return next(action);
};

export default websocketMiddleware;
