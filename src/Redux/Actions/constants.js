<<<<<<< HEAD
<<<<<<< HEAD
import axios from "axios"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"


export const getAllProducts = () => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/products`)
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        })
    }
}
=======
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
>>>>>>> DEVELOP
=======
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL = "GET_DETAIL";
export const POST_PRODUCT = "POST_PRODUCT";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SET_LOADING = "SET_LOADING";
>>>>>>> DEVELOP
