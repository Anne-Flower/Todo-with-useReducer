import "./App.css";
import { useReducer, useState } from "react";

function App() {
  type Todo = {
    id: number;
    text: string;
    checked: boolean;
  };

  type Action =
    | { type: "add"; id: number; text: string }
    | { type: "delete"; id: number }
    | { type: "toggle"; id: number }
    | { type: "changeText"; id: number; text: string };

  type State = Todo[];

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "add":
        return [...state, { id: action.id, text: action.text, checked: false }];
      case "delete":
        return state.filter((todo) => todo.id !== action.id);
      case "toggle":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        );
      case "changeText":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, text: todo.text } : todo
        );
      default:
        return state;
    }
  }

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
