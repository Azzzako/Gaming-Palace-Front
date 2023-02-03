import { GET_ALL_PRODUCTS, POST_NEW_PRODUCT } from "./Actions/constants";

const initialState = {
  allProducts: [],
  allCategories: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };

    case POST_NEW_PRODUCT:
      return { ...state };

    default:
      return state;
  }
};

export default rootReducer;
