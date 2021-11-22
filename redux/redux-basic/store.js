import { createStore } from "redux";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools());

export const counterSelector = () => store.getState().counter.count;
export const todoSelector = () => store.getState().todo.todos;
