import actionTypes from "./types";
import { combineReducers } from "redux";


const items = (state = [], { type, payload }) => {
    switch (type) {
    case actionTypes.ADD_PHONE:
        [...state, payload];
           
        
      case actionTypes.DELETE_PHONE: 
            return state.filter(({id}) => id !== payload);
         
    default:
      return state;
  }
}


const filter = (state = "", { type, payload }) => {
     
    switch (type) {
      
    case actionTypes.FILTER_PHONE:
      return payload;
         
    default:
      return state;
  }
}


export default combineReducers({
    items,
    filter,
})

