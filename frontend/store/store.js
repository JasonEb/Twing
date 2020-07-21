import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from '../middleware/thunk_middleware'
import websocketMiddleware from '../middleware/websocket_middleware'
import rootReducer from '../reducers/root_reducer'

const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let middleware = [thunkMiddleware, websocketMiddleware ]
    const store = createStore(
        rootReducer, /* preloadedState, */
        composeEnhancers(applyMiddleware(...middleware))
    );
    
    return store
}

export default configureStore