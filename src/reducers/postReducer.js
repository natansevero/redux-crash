import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
    // Fetch posts data
    items: [],
    // A post form
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }

        default:
            return state
    }
}