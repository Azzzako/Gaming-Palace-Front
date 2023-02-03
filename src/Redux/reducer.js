import { GET_ALL_PRODUCTS, GET_DETAIL, POST_PRODUCT, CLEAN_DETAIL, SET_LOADING} from "./Actions/constants";


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


      case POST_PRODUCT:
        return {
          ...state,
          
        };  

      case "ADD_FAV":
        const all = state.allProducts
        const favs = all.map(fav=> all.includes(fav.id===action.payload))
        return {
          ...state,
          favourites: favs
        }
       

  
    default: return state;
   };


  
      

};

export default rootReducer;
