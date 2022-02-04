import { combineReducers } from "redux";
import { getProduct } from "./productReducer";

export const rootReducer = combineReducers({
  products: getProduct,
});
