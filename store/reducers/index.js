import { combineReducers } from "redux";
import { getProduct } from "./productReducer";
import { productSelect } from "./productSelectReducer";

export const rootReducer = combineReducers({
  products: getProduct,
  selectProducts: productSelect,
});
