
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";
import { toast } from 'react-toastify';

const addContact = (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.name)) {

        toast.error(` '${payload.name}' is already in your list`);
        return state;
    }
  
    return [...state, payload]
}
 


const items = createReducer([], {
     
    [actions.addContact]: addContact ,
    [actions.deleteContact]: (state, { payload }) => state.filter(({id}) => id !== payload),
})


const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})


export default combineReducers({
    items,
    filter,
})



/* 
const items = (state = [], { type, payload }) => {
    switch (type) {
    case actionTypes.ADD_PHONE:
     return   [...state, payload];
           
        
      case actionTypes.DELETE_PHONE: 
            return state.filter(({id}) => id !== payload);
         
    default:
      return state;
  }
} */


/* const filter = (state = "", { type, payload }) => {
     
    switch (type) {
      
    case actionTypes.FILTER_PHONE:
      return payload;
         
    default:
      return state;
  }
} */