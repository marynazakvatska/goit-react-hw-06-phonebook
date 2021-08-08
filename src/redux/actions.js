import shortid from 'shortid';
/* import {ADD_PHONE, DELETE_PHONE, FILTER_PHONE} from "./types" */
import { createAction } from '@reduxjs/toolkit';
import actionTypes from "./types"


     
  export  const addContact = (  {name, number}  ) => ({
   type: actionTypes.ADD_PHONE,
     payload:
     {
      id: shortid.generate(),
      name,
      number,
    }    
  })  


 export const deleteContact = (contactId) => ({
     type:  actionTypes.DELETE_PHONE,
    payload: contactId,      
})
     

 export const changeFilter = value => 
({
    type: actionTypes.FILTER_PHONE,
    payload: value,
})
       
/*  export default {addContact, deleteContact, changeFilter} */