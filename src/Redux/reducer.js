import { GET_ALL_PRODUCTS, GET_DETAIL, POST_NEW_PRODUCT,ADD_FAV, ADD_CART, GET_ALL_CATEGORIES, DELETE_FAV, GET_PRODUCT_FILTER, DELETE_CART } from "./Actions/constants";


const initialState = {
  allProducts: [],
  allCategories: [],
  details: [],
  favourites: [],
  shopCart: []

};


const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_ALL_PRODUCTS:

    return { ...state, allProducts: action.payload
    }
    
    case GET_ALL_CATEGORIES:

    return { ...state, allCategories: action.payload
    }


    case GET_DETAIL:
			return {
				...state, details: action.payload,
			};

      case GET_PRODUCT_FILTER:
      return { ...state, allProducts: action.payload }


      case POST_NEW_PRODUCT:
        return { 
          ...state 
        };

      case ADD_FAV:
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        }

      case ADD_CART:
        return {
          ...state,
          shopCart: [...state.shopCart, action.payload]
        }

      case DELETE_FAV:
        const favs = state.favourites.length>0 && state.favourites.filter(fav=> fav.id !== action.payload);
        return {
          ...state,
          favourites: favs
        }
      
      case DELETE_CART:
        const prodsCart = state.shopCart.length>0 && state.shopCart.filter(prod=> prod.id !== action.payload)
        return {
          ...state,
          shopCart: prodsCart
        }
  
      default:
        return state;
    }
  };

export default rootReducer;
