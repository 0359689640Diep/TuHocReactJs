import { UPDATE_TODO,DELETE_TODO,ADD_TODO, SET_TODO_INPUT } from "./constants";
const initState = {
    todos: [],
    todoInput: "",
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newTodo = [...state.todos];
            newTodo.splice(action.payload, 1);

            return {
                ...state,
                todos: newTodo
            }
        case UPDATE_TODO:
            const updatedTodos = state.todos.map((todo, index) => {

                if (index === action.payload.index) {
                  return action.payload.updatedTodo; // Assuming updatedTodo is the new value for the todo
                } else {
                  return todo;
                }
              });
              
              return {
                ...state,
                todos: updatedTodos,
              };
        default:
            throw new Error('Invalid action');
    }
}
export {initState};
export default reducer;