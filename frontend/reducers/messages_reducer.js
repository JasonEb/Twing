import { RECEIVE_MESSAGE } from '../actions/message_actions'

import { parseMessage } from '../util/twitchHelperMethods'

const initialState = {
    1: { message: 'testing testing', meta: {} },  
    2: { message: 'test 2', meta: {} },
    3: { message: 'mic sounds nice', meta: {} } 
}

const messagesReducer = (state = initialState, action) => {
    Object.freeze(state)
    let nextState = {}

    switch(action.type){
        case RECEIVE_MESSAGE:
            let parsed = parseMessage(action.message.data)
            const newMessage = { [Date.now()]: { message: parsed.message, meta: parsed} }
            return Object.assign({}, state, newMessage)
        default:
            return state
    }
}

export default messagesReducer