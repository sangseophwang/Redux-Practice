import { applyMiddleware, createStore } from "redux";
import todoApp from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(todoApp, composeWithDevTools(applyMiddleware()));

export default store;
