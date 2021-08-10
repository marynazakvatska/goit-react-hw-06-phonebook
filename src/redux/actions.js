import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';



 const addContact = createAction('ADD_PHONE', (  {name, number}  ) =>
{
  return {
    payload:
     {
      id: shortid.generate(),
      name,
      number,
    }    
  }
});


 const deleteContact = createAction('DELETE_PHONE');
 const changeFilter = createAction('FILTER_PHONE')

export default { addContact, deleteContact, changeFilter}
     





/*   export  const addContact = (  {name, number}  ) => ({
   type: actionTypes.ADD_PHONE,
     payload:
     {
      id: shortid.generate(),
      name,
      number,
    }    
  })   */

/* 
 export const deleteContact = (contactId) => ({
     type:  actionTypes.DELETE_PHONE,
    payload: contactId,      
})
     

 export const changeFilter = value => 
({
    type: actionTypes.FILTER_PHONE,
    payload: value,
}) */
       
