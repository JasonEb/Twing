import { WS_CONNECT, WS_SEND, WS_DISCONNECT } from '../actions/websocket_actions'

const websocketMiddleware = store => next => action => {
  switch (action.type) {
    // User request to connect
    case WS_CONNECT:
      // Configure the object
      debugger
      websocket = new WebSocket(action.host);

      // Attach the callbacks
      websocket.onopen = () => dispatch({ type: 'WEBSOCKET:OPEN' });
      websocket.onclose = (event) => dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      websocket.onmessage = (event) => dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });

      break;

    // User request to send a message
    case WS_SEND:
      websocket.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case WS_DISCONNECT:
      websocket.close();
      break;

    default: // We don't really need the default but ...
      break;
  };

  return next(action);
};

export default websocketMiddleware