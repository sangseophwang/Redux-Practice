import { applyMiddleware, createStore } from "redux";
import todoApp from "./reducers";

function middleware1(store) {
  console.log("middleware1", 0);
  return (next) => {
    console.log("middleware1", 1);
    return (action) => {
      console.log("middleware1", 2);
      const returnValue = next(action);
      console.log("middleware1", 3);
      return returnValue;
    };
  };
}

const store = createStore(todoApp, applyMiddleware(middleware1));

export default store;
