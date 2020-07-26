import { RECEIVE_MESSAGE } from '../actions/message_actions'

import { parseMessage } from '../util/twitchHelperMethods'

import messagesInitialState from './messagesInitialState'

const messagesReducer = (state = messagesInitialState, action) => {
    Object.freeze(state)
    let nextState = {}

    switch(action.type){
        case RECEIVE_MESSAGE:
            let parsed = parseMessage(action.message.data)
            const newMessage = { [Date.now()]: { message: parsed.message, meta: parsed} }

            //
            return Object.assign({}, state, newMessage)
        default:
            return state
    }
}

export default messagesReducer