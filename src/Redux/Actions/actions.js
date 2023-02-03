import axios from "axios";
import { GET_ALL_PRODUCTS } from "./constants";


export const getAllProducts = () => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/products`)
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        })
    }
}