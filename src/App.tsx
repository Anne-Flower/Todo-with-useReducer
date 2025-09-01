import "./App.css";

function App() {
  type Todo = {
    id: number;
    text: string;
    check: boolean;
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
        return [...state, { id: action.id, text: action.text, check: false }];
      case "delete":
        return state.filter((todo) => todo.id !== action.id);
      case "toggle":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, check: todo.check } : todo
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

  return    <div className="TodoList">

  </div>;
  

}

export default App;
