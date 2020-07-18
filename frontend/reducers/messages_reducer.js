import { RECEIVE_MESSAGE } from '../actions/message_actions'

const messageReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = {}

    switch(action.type){
        case RECEIVE_MESSAGE:
            const newMessage = { [Date.now()]: action.message }
            return Object.assign({}, state, newMessage)
        default:
            return state
    }
}

export default messagesReducer