export const SET_PRODUCTS = "setProducts";
export const GET_PRODUCTS = "getProducts";

export const setProducts = (payload) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
