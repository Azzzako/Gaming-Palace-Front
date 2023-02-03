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
        case CLEAN_DETAIL : 
            return {
              ...state ,
              dogDetail : {}
            
          };

          case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
      
    default: return state;
   };


  
      

};

export default rootReducer;
