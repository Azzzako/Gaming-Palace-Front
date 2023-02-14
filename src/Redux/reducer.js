

import { GET_ALL_PRODUCTS, GET_DETAIL, POST_NEW_PRODUCT, ADD_FAV, GET_CART, GET_ALL_CATEGORIES, DELETE_FAV, GET_PRODUCT_FILTER, DELETE_CART, TOTAL_BUY, RESTORE_TOTAL_BUY, NEW_REVIEW, SET_LOADING, GET_USERS, TOTAL_TO_PAY } from "./Actions/constants";



const initialState = {
  allProducts: [],
  allCategories: [],
  details: [],
  favourites: [],
  shopCart: [],
  totalBuy: [0],
  totalToPay: [],
  users: []
};


const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case TOTAL_TO_PAY:
         for(let i=0; i<state.totalToPay.length; i++){
          if(state.totalToPay[i].name===action.payload.name){
            state.totalToPay[i].quantity+=action.payload.quantity
            return {
            ...state
          }
          }
        }
      return {
        ...state,
        totalToPay: [...state.totalToPay, action.payload]
      }

    case GET_ALL_PRODUCTS:

      return {
        ...state, allProducts: action.payload
      }

    case GET_ALL_CATEGORIES:

      return {
        ...state, allCategories: action.payload
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

    case NEW_REVIEW:
      return {
        ...state
      };

    case ADD_FAV:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };

    case GET_CART:
      const prodsInCart = []
      for(let i=0; i<action.payload.length; i++){
        const findProduct = state.allProducts.find(prod=> prod.id === action.payload[i].idproduct)
        prodsInCart.push(findProduct)
      }
      return {
        ...state,
        shopCart: prodsInCart
      }

    case DELETE_FAV:
      const favs = state.favourites.length > 0 && state.favourites.filter(fav => fav.id !== action.payload);
      return {
        ...state,
        favourites: favs

      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case DELETE_CART:
      const prodsCart = state.shopCart.length > 0 && state.shopCart.filter(prod => prod.id !== action.payload);
      return {
        ...state,
        shopCart: prodsCart
      }

    case TOTAL_BUY:
      return {
        ...state,
        totalBuy: [...state.totalBuy, action.payload]
      }

      case RESTORE_TOTAL_BUY:
        return {
          ...state,
          totalBuy: [0],
          totalToPay: []
        }

    case GET_USERS:
      return { ...state, users: action.payload }

      
    default:
      return state;
  }
};


export default rootReducer;
