import { RECEIVE_MESSAGE } from '../actions/message_actions'

import { parseMessage } from '../util/twitchHelperMethods'

const initialState = { 
    0: { x: 0, y: 0, active: true }
}

const pointsReducer = (state = initialState, action) => {
    Object.freeze(state)
    let nextState = {}

    switch(action.type){
        case RECEIVE_POINT:
            const newPoint = { [Date.now()]: { message: action.payload.message, meta: action.payload} }
            return Object.assign({}, state, newPoint)
        default:
            return state
    }
}

export default pointsReducer