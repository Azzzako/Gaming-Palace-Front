


const initialState = {
    allProducts: [],
    allCategories: [],

   };




const rootReducer = (state = initialState, action) => {

 switch(action.type){

   default: return state;
 };
};

export default rootReducer;