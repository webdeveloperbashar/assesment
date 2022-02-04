import { GET_PRODUCT_SUCCESS } from "../constants/productConstant";

export const getProduct = (data) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_SUCCESS,
    payload: data,
  });
};
