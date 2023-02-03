import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";

export const getAllProducts = () => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/products`);
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data,
    });
  };
};

export const postNewProduct = () => {
  return async function () {
    try {
      const newProduct = await axios.post(`http://localhost:3001/products`);
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  };
};
