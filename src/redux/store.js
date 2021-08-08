
import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/* import actionTypes from "./types"; */
import actionTypes from "./types"


const itemReducer = (state = [], { type, payload }) => {
    switch (type) {
    case actionTypes.ADD_PHONE:
       
      /*   return state.items.push(payload); */
        [...state, payload];
           
        
      case actionTypes.DELETE_PHONE: 
            return state.filter(cont =>cont.id !== payload);
         
    default:
      return state;
  }
}



const filterReducer = (state = "", { type, payload }) => {
     
    switch (type) {
      
    case actionTypes.FILTER_PHONE:
      return state.filter(payload.toLowerCase());
         
    default:
      return state;
  }
}


const phoneReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
})


const rootReducer = combineReducers({
    contacts: phoneReducer,
});

const store = createStore(rootReducer, composeWithDevTools())
    
export default store;


/* 
"import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const addContact = createAction('contacts/addContact');
const changeFilter = createAction('contacts/changeFilter');

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.items.push(action.payload);
    return state;
  },
  [changeFilter]: (state, action) => {
    state.filter = action.payload;
    return state;
  },
});" */