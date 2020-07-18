import { RECEIVE_MESSAGE } from '../actions/message_actions'

const initialState = {
    1: 'testing testing',
    2: 'test 2',
    3: 'mic sounds nice'
}

const messagesReducer = (state = initialState, action) => {
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