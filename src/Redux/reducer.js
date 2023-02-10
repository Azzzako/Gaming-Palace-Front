import { GET_ALL_PRODUCTS, GET_DETAIL, POST_NEW_PRODUCT,ADD_FAV, GET_ALL_CATEGORIES,DELETE_FAV, NEW_REVIEW, SET_LOADING} from "./Actions/constants";


const initialState = {
  allProducts: [],
  allCategories: [],
  details: [],
  favourites: [],
  

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


      case POST_NEW_PRODUCT:
        return { 
          ...state 
        };

      case NEW_REVIEW:
        return{
          ...state
        };

      case ADD_FAV:
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        };

        
      case DELETE_FAV:
        const favs = state.favourites.length>0 && state.favourites.filter(fav=> fav.id !== action.payload);
        return {
          ...state,
          favourites: favs
        };
      
        case SET_LOADING:
			  return {
				...state,
				loading: action.payload,
			};
  
      default:
        return state;
    }
  };

export default rootReducer;
