import { GET_ALL_PRODUCTS, GET_DETAIL, POST_PRODUCT, CLEAN_DETAIL, SET_LOADING, GET_PRODUCT_FILTER} from "./Actions/constants";


const initialState = {
  allProducts: [],
  allCategories: [],
  details: [],
  loading: false,
  favourites: []

};


console.log(initialState.details)

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_ALL_PRODUCTS:

    return { ...state, allProducts: action.payload
    }
      

    case GET_DETAIL:
			return {
				...state, details: action.payload,
			};

      case GET_PRODUCT_FILTER:
      return { ...state, allProducts: action.payload }


      case POST_PRODUCT:
        return {
          ...state,
          
        };  

      case "ADD_FAV":
       
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        }

      case "DELETE_FAV":
        const favs = state.favourites.length>0 && state.favourites.filter(fav=> fav.id !== action.payload);
        return {
          ...state,
          favourites: favs
        }
       

  
    default: return state;
   };


  
      

};

export default rootReducer;
