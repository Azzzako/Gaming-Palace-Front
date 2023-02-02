import { GET_PRODUCTS } from "./Actions/constants";



const initialState = {
    allProducts: [],
    allCategories: [],

   };




const rootReducer = (state = initialState, action) => {

 switch(action.type){
  case GET_PRODUCTS:
    return {
      ...state,
      allProducts: action.payload
    }

   default: return state;
 };
};

export default rootReducer;