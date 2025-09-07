import { Action } from "../../src/types/actionType";
import { Todo } from "../../src/types/todoType";

export type State = Todo[]; //would be more efficient to do it with a Map

export function reducer(state: State, action: Action): State {
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
