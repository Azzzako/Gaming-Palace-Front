/* eslint-disable no-unreachable */
import axios from 'axios';
import { GET_PRODUCTS } from "./constants";




export const getProducts = () => {
    try {
    return async function(dispatch){
    return await axios.get("http://localhost:3001/products")
    .then(resp => {
        dispatch({
            type: GET_PRODUCTS,
            payload: resp.data
        })
    })
}
} catch (error) {
    console.log(error);
}
};