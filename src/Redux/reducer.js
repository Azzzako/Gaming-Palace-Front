import { GET_ALL_PRODUCTS, GET_DETAIL, POST_PRODUCT, CLEAN_DETAIL, SET_LOADING} from "./Actions/constants";


const initialState = {
  allProducts: [],
  allCategories: [],
  details: [],
  loading: false,

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


      case POST_PRODUCT:
        return {
          ...state,
          
        };  
       

  
    default: return state;
   };


  
      

};

export default rootReducer;
