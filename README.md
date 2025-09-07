# ToDo List using useReducer (React + TypeScript)

Demo of the hook useReducer, useful when the state management starts to get more complex than what a couple of useState can handle.

Goal : centralize logic and lisibility


### To start project, run commands :
`git clone https://github.com/Anne-Flower/Todo-with-useReducer`

`cd Todo-with-useReducer`

`npm install`

`npm start`


### Archi :

- `src/logic/reducer.ts`
- `src/types/todoType.ts`, `src/types/actionType.ts`


### Core idea :

With useReducer, instead of calling multiple setState, you can dispatch actions:

```javascript

dispatch({ type: "add", id: Date.now(), text: input });
dispatch({ type: "toggle", id: todo.id  });
dispatch({ type: "delete", id: todo.id  });