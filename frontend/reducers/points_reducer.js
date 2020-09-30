import { RECEIVE_POINT } from '../actions/point_actions'

const initialState = { 
    0: { x: 25, y: 25, type: "blip" },
    1: { x: 50, y: 50, type: "look_left" },
    2: { x: 10, y: 10, type: "blip" }
}

const pointsReducer = (state = initialState, action) => {
    Object.freeze(state)
    let nextState = {}

    switch(action.type) {
        case RECEIVE_POINT:
            const newPoint = { [Date.now()]: { ...action.payload} }
            return Object.assign({}, state, newPoint)
        default:
            return state
    }
}

export default pointsReducer