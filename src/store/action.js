import { UPDATE_TODO,DELETE_TODO,SET_TODO_INPUT, ADD_TODO } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const add_todo = payload => ({
    type: ADD_TODO,
    payload
})

export const delete_todo = payload => ({
    type: DELETE_TODO,
    payload
})

export const update_todo = payload => ({
    type: UPDATE_TODO,
    payload
})