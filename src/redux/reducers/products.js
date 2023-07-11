import { SET_PRODUCTS, GET_PRODUCTS } from "../actions/products";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    case GET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default reducer;
