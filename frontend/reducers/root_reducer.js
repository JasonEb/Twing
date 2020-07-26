import { combineReducers } from 'redux'
import messagesReducer from "./messages_reducer"
import pointsReducer from './points_reducer'

const rootReducer = combineReducers({
    messages: messagesReducer,
    points: pointsReducer
})

export default rootReducer
