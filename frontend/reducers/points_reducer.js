import { RECEIVE_POINT } from '../actions/point_actions'

const initialState = { 
    0: { x: 25, y: 25, type:"blip", animation: "blip" },
    1: { x: 10, y: 10, type:"blip", animation: "blip" },
    2: { x: 50, y: 50, type:"eye", animation: "look_left" },
    3: { x: 50, y: 50, type:"eye", animation: "look_right" },
    4: { x: 50, y: 50, type:"eye", animation: "look_up" },
    5: { x: 50, y: 50, type:"eye", animation: "look_down" },
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