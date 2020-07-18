import { createStore } from 'redux'
import rootReducer from '../reducers/root_reducer'

const configureStore = () => {
    const store = createStore(
        rootReducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );
    
    return store
}

export default configureStore