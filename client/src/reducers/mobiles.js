import { SHOW_MOBILES } from '../actions'
import { SHOW_DETAILS } from '../actions'

const initialState = {
    list: [],
    // hidden: [],
    loading: true
}

export function showMobiles(state = initialState, action) {
    switch (action.type) {
        case SHOW_MOBILES:
            return Object.assign({}, state, { list: action.payload, loading: !state.loading })
        default:
            return state

    }
}

export function showMoreDetails(state = initialState, action) {
    switch (action.type) {
        case SHOW_DETAILS:
            return Object.assign({}, state, { hidden: action.payload })
        default:
            return state
    }
}