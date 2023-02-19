/* eslint-disable no-unreachable */
import axios from "axios";

import { GET_ALL_PRODUCTS, GET_ALL_CATEGORIES, GET_DETAIL, GET_PRODUCT_FILTER, ADD_FAV, DELETE_FAV, GET_CART, DELETE_CART, TOTAL_BUY, RESTORE_TOTAL_BUY, NEW_REVIEW, SET_LOADING, GET_USERS, GET_USER, TOTAL_TO_PAY, GET_FAVS, DELETE_ALL_FAVS, DELETE_ALL_CART, GET_USER_BY_MAIL, DELETE_THIS_ORDER, UPDATE_USER  } from "./constants";



export const getArray = (payload) => {
	return async function (dispatch) {
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

export const newUser = (user) => {
	try {
		return async function (dispatch) {
			const newUser = await axios.post(`http://localhost:3001/users`, user)
			return dispatch({
				type: GET_USER,
				payload: newUser.data
			})
		}
	} catch (error) {
		console.log((error, "Llena los campos pues"));
	}
	// return async (dispatch) => {
	// 	try {
	// 	  const response = await fetch(`http://localhost:3001/users`, {
	// 		method: 'POST',
	// 		body: JSON.stringify(user),
	// 		headers: {
	// 		  'Content-Type': 'application/json'
	// 		}
	// 	  });
	
	// 	  const data = await response.json();
	
	// 	  if (response.ok) {
	// 		dispatch(newUser(data));
	// 		return { success: true };
	// 	  } else {
	// 		return { error: data.message };
	// 	  }
	// 	} catch (error) {
	// 	  console.error(error);
	// 	  return { error: 'Error de red' };
	// 	}
	//   };
}


export const getUser = () => {
	try {
		return async function (dispatch) {
			const user = await axios.get(`http://localhost:3001/users`)
			return dispatch({
				type: GET_USERS,
				payload: user.data
			})
		}
	} catch (error) {
		console.log(error);
	}
}

export const updateUser = (user) => {
	try {
		return async function (dispatch) {
			const userUp = await axios.post(`http://localhost:3001/updateuser`, user)
			return dispatch({
				type: UPDATE_USER,
				payload: userUp.data
			})
		}
	} catch (error) {
		console.log((error, "Llena los campos pues"));
	}
}

export const postByMail = (email) => {
	return async function (dispatch) {
		fetch(`http://localhost:3001/getuserbymail`, {
			body: JSON.stringify({email: email}),
			method: "POST",
			headers: {"Content-type": "application/json"}
		})
		.then(response => response.json())
		.then(data => dispatch({
			type: GET_USER_BY_MAIL,
			payload: data
		}))
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

export const addFav = (id, item) => {
	return async (dispatch) => {
		const response = await axios.post(`http://localhost:3001/favorite/${id}`, item);
		return dispatch({
			type: ADD_FAV,
			payload: response.data,
		});
	};
};

export const deleteFavs = (item) => {
	return async (dispatch) => {
		await axios.post(`http://localhost:3001/deletefav`, item);
		return dispatch({
			type: DELETE_FAV,
			payload: item
		})
	}				
};

export const deleteAllFavs = (id) => {
	return async (dispatch) => {
		await axios.post(`http://localhost:3001/deleteallfav`, id);
		return dispatch({
			type: DELETE_ALL_FAVS,
		})
	}
}

export const getFavs = (id) => {
	return async (dispatch) => {
		await axios.get(`http://localhost:3001/getfavorites/${id}`)
		.then(res=> {
			dispatch({
				type: GET_FAVS,
				payload: res.data[0]?.favorites
			})
		})
	}
};


export function setLoading(payload) {
	return {
		type: SET_LOADING,
		payload
	};
};


export const addCart = (product) => {
	return async () => {
		await axios.post(`http://localhost:3001/addproduct`, product);
		
	};
};

export const getCart = (id) => {
	try {
	return async (dispatch) => {
		await axios.get(`http://localhost:3001/getcartbyid/${id}`)
		.then(res=>{
			dispatch({
				type: GET_CART,
				payload: res.data
			})
		})			
	}
		
	} catch (error) {
		console.log(error)
	}
}

export const deleteItemCart = (product) => {
	return async () => {
		await axios.post(`http://localhost:3001/deleteproduct`, product);
		
	};
};

export const deleteAllCart = (id) => {
	return async (dispatch) => {
		await axios.post(`http://localhost:3001/deleteallproducts`, id);
		return dispatch({
			type: DELETE_ALL_CART
		})
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

};

export const deleteThisOrder = (idproduct) => {
	return {
		type: DELETE_THIS_ORDER,
		payload: idproduct
	}
}

export const totalToPay = (item) => {
	return {
		type: TOTAL_TO_PAY,
		payload: item
	}
};



export const totalPayment =(prods) => {
	return async () => {
		await axios.post("http://localhost:3001/payment", prods)
		.then(res => window.location.href = res.data.response.body.init_point)
	}
}





export const sendNMailer = (aBody) => {
	return async () => {
		axios.post("http://localhost:3001/nmailer", aBody)
	}
}


export const changeStock = (info) => {
	return async () => {
		axios.post("http://localhost:3001/change/stock", info)
	}
}
