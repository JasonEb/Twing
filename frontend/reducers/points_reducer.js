import { RECEIVE_POINT } from '../actions/points_actions'

const initialState = { 
    0: { x: 0, y: 10, active: true }
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