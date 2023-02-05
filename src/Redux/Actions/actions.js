import axios from "axios";
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, POST_NEW_PRODUCT,  GET_DETAIL } from "./constants";


export const getAllProducts = () => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/products`);
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data,
    });
  };
};

export const getAllCategories = () => {
	return async function (dispatch) {
	  const response = await axios.get(`http://localhost:3001/categories`);
	  return dispatch({
		type: GET_ALL_CATEGORIES,
		payload: response.data,
	  });
	};
  };

export const postNewProduct = (data) => {
    try {
       return async function () {
        const newProduct = await axios.post(`http://localhost:3001/products`, data);
      return newProduct
    }
      } catch (error) {
      console.log(error)
  };
};


export const getDetail = (id) => {
	return async (dispatch) => {
		const response = await axios.get(`http://localhost:3001/products/${id}`);
		return dispatch({
			type: GET_DETAIL,
			payload: response.data,
		});
	};
};

