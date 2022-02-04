import {
  GET_PRODUCT_FAILUR,
  GET_PRODUCT_SUCCESS,
} from "../constants/productConstant";

// const initialState = {
//   products: [],
// };
export const getProduct = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        products: action.payload,
      };
    case GET_PRODUCT_FAILUR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
