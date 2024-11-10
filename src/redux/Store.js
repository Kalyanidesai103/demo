import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todo-reducer";

const rootReducer = combineReducers(
    {
        todos: todoReducer,

    }
)

const Store = createStore(rootReducer)

export default Store; 