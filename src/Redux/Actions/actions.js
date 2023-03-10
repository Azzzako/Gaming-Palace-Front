/* eslint-disable no-unreachable */
import axios from "axios";

import { GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, GET_DETAIL, GET_PRODUCT_FILTER, ADD_FAV, DELETE_FAV, ADD_CART, DELETE_CART, TOTAL_BUY, RESTORE_TOTAL_BUY,NEW_REVIEW, SET_LOADING } from "./constants";



export const getArray = (payload) => {
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/function2?word=${payload.word}&filter1=${payload.filter1}&filter2=${payload.filter2}&order=${payload.order}`)
        return dispatch({
            type: GET_PRODUCT_FILTER,
            payload: response.data
        });
	};
};


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

export const newReview = (data) => {
    try {
       return async function () {
        const newReview = await axios.post(`http://localhost:3001/review`, data);
      return newReview

    }
      } catch (error) {
      console.log(error, "no data")
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

export const addFav = (id) => {
	return async (dispatch) => {
		const response = await axios.get(`http://localhost:3001/products/${id}`);
		return dispatch({
			type: ADD_FAV,
			payload: response.data,
		});
	};
};

export const deleteFavs = (id) => {
	return {
		type: DELETE_FAV,
		payload: id
	}
};


export function setLoading(payload) {
	return { 
			type: SET_LOADING, 
			payload };
};


export const addCart = (id) => {
	return async (dispatch) => {
		const response = await axios.get(`http://localhost:3001/products/${id}`);
		return dispatch({
			type: ADD_CART,
			payload: response.data,
		});
	};
};

export const deleteCart = (id) => {
	return {
		type: DELETE_CART,
		payload: id
	}
};


export const totalBuy = (payload) => {
	return {
		type: TOTAL_BUY,
		payload
	}
};

export const restoreTotalBuy = () => {
	return {
		type: RESTORE_TOTAL_BUY,
	}
}

