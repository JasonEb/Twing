import { combineReducers } from 'redux'
import messagesReducer from "./messages_reducer"

const rootReducer = combineReducers({
    messages: messagesReducer
})

export default rootReducer
