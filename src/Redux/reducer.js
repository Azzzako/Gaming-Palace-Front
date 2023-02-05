import { GET_ALL_PRODUCTS, GET_DETAIL, POST_NEW_PRODUCT, GET_ALL_CATEGORIES} from "./Actions/constants";


const initialState = {
  allProducts: [],
  allCategories: [],
  details: [],
 

};


console.log(initialState.details)

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
        return { ...state };
  
      default:
        return state;
    }
  };

export default rootReducer;
