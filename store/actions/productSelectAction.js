import { SELECT_PRODUCT } from "../constants/productSelectConstant";

export const productSelect = (payload) => async (dispatch) => {
  dispatch({
    type: SELECT_PRODUCT,
    payload,
  });
};
