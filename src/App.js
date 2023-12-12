import { useRef, useState, useEffect } from "react";
import { useStore, actions } from "./store";

function App() {
  const inputRef = useRef();
  const [state, dispatch] = useStore();
  const todos = state.todos;
  const todoInput = state.todoInput;
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleAdd = () => {
    dispatch(actions.add_todo(todoInput));
    dispatch(actions.setTodoInput(""));
  };

  const handleUpdateTodo = (index, newTodo) => {
    dispatch(actions.update_todo({ index, updatedTodo: newTodo }));
    setUpdateIndex(null);
    dispatch(actions.setTodoInput(""));

  };

  const inputUpdateTodo = (index, todo) => {
    return (
      <div key={index}>
        <input
          ref={inputRef}
          value={state.todoInput}
          onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
        />
        <button onClick={() => handleUpdateTodo(index, inputRef.current.value)}>
          Update
        </button>
      </div>
    );
  };

  useEffect(() => {
    // Focus on the input element after component mount
    inputRef.current && inputRef.current.focus();
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={() => { handleAdd(); inputRef.current.focus(); }}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>
          {index === updateIndex ? (
            inputUpdateTodo(index, todo)
          ) : (
            <>
              {todo}
              <span onClick={() => dispatch(actions.delete_todo(index))}>&times;</span>
              <span onClick={() => { setUpdateIndex(index); inputRef.current.focus(); }}> Update </span>
            </>
          )}
        </li>
      ))}
    </div>
  );
}

export default App;
