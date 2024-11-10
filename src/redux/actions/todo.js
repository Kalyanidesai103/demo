import { ADD_TODO, DELETE_TODO, } from "./action-types";


export const addTodo = (todo)  => ({
  type: ADD_TODO,
  payload: todo 

})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload:id
})