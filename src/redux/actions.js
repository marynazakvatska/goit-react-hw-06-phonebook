import shortid from 'shortid';
import actionTypes from "./types"
import { createAction} from '@reduxjs/toolkit'


     
   const addContact = (  name, number  ) => ({
   type: actionTypes.ADD,
     payload:
     {
      id: shortid.generate(),
      name,
      number,
    }    
  })  


 const deleteContact = contactId => ({

     type:  actionTypes.DELETE,
    payload: contactId,      
})
     

 const changeFilter = value => 
({
    type: actionTypes.FILTER,
    payload: value,
})
       
export default {addContact, deleteContact, changeFilter}