import { RECEIVE_POINT } from '../actions/point_actions'

const initialState = { 
    0: { x: 0, y: 10, active: true },
    1: { x: -10, y: 5, active: true },
    2: { x: -10, y: 10, active: true }
}

const pointsReducer = (state = initialState, action) => {
    Object.freeze(state)
    let nextState = {}

    switch(action.type){
        case RECEIVE_POINT:
            const newPoint = { [Date.now()]: { ...action.payload, active: true } }
            return Object.assign({}, state, newPoint)
        default:
            return state
    }
}

export default pointsReducer