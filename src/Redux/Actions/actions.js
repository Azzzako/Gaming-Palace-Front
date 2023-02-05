import axios from "axios";
import { GET_ALL_PRODUCTS, GET_DETAIL, POST_PRODUCT} from "./constants";


export const getAllProducts = () => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/products`)
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        })
    }
}

export const getDetail = (id) => {
	return async (dispatch) => {
		const response = await axios.get(`http://localhost:3001/products/${id}`);
		return dispatch({
			type: GET_DETAIL,
			payload: response.data,
		});
	};
};

export const postProduct = (payload) => {
	return async (dispatch) => {
		const res = await axios.post('/products', payload);
		return dispatch({
			type: POST_PRODUCT,
			res,
		});
	};
};
export function cleanDetail ()  {
    return {
        type : "CLEAN_DETAIL"
    }
};



export const addFav = (id) => {
	return async (dispatch) => {
		const response = await axios.get(`http://localhost:3001/products/${id}`);
		return dispatch({
			type: "ADD_FAV",
			payload: response.data,
		});
	};
};

export const deleteFavs = (id) => {
	return {
		type: "DELETE_FAV",
		payload: id
	}
};