import { SHOW_MOBILES } from '../actions'

const initialState = {
    list: []
}

export function showMobiles(state = initialState, action) {
    switch (action.type) {
        case SHOW_MOBILES:
            return Object.assign({}, state, { list: action.payload })
        default:
            return state
    }
}