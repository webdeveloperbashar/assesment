import { SELECT_PRODUCT } from "../constants/productSelectConstant";

const initialState = {
  selectProducts: [],
};

export const productSelect = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectProducts: [...state.selectProducts, action.payload],
      };
    default:
      return state;
  }
};
