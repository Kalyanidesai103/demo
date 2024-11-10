import { ADD_TODO, DELETE_TODO } from "../actions/action-types"
const initialState = []


export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:


            return [...state, action.payload]
        case DELETE_TODO:

            const newState = state.filter((todo) => todo.id !== action.payload)
            return newState
        default:
            return state;
    }
}

