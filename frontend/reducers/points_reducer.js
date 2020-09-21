import { RECEIVE_POINT } from '../actions/point_actions'

const initialState = { 
    0: { x: 25, y: 25, active: true },
    1: { x: 0, y: 0, active: true },
    2: { x: 10, y: 10, active: true }
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