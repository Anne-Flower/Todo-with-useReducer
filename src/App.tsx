import "./App.css";
import { useReducer, useState } from "react";
import { reducer, State } from "../src/logic/reducer";

function App() {
  const initialState: State = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const addText = () => {
    if (text.trim()) {
      dispatch({ type: "add", text, id: Date.now() });
      setText("");
    }
  };

  return (
    <>
      <div className="TodoList">
        <h1>
          <strong>TODO LIST</strong>
        </h1>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task here"
        />
        <button onClick={addText}> Add </button>

        <ul>
          {state.map((todo) => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => dispatch({ type: "toggle", id: todo.id })}
                ></input>
                {todo.text}
              </label>
              <button onClick={() => dispatch({ type: "delete", id: todo.id })}>
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
