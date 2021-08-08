
import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/* import actionTypes from "./types"; */
import phoneReducer from './reducer';


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