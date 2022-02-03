import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const bindWithMiddlewar = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = () => {
  return createStore(rootReducer, bindWithMiddlewar([thunk]));
};

export const wrapper = createWrapper(makeStore);
