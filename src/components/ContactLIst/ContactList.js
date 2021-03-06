import React from 'react';
import './ContactList.module.css';
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { getVisibleContacts } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';



const ContactList = () => {
  
  const contacts = useSelector(getVisibleContacts)
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <p className={s.contactDescription}>
        
            {name}: {number}
          </p>
          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};



export default ContactList

  /* const handleSubmit = ({ name, number }) => {
     contacts.find(contact =>
       contact.name.toLowerCase().includes(name.toLowerCase())
         ? alert(`${contact.name}  already exist`)
         :addContact(name, number)
       
     )
   }; */
  
/* const getVisibleContacts = (allContacts, filter) => {
  
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    
    contact.name.toLowerCase().includes(normalizedFilter)
  );
 }


const mapStateToProps = ({contacts: {items, filter}}) => ({
  contacts: getVisibleContacts(items, filter)
})



const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id))
  
}) */

/* export default connect(mapStateToProps, mapDispatchToProps)(ContactList) ;
 */




/* ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
      onDeleteContact : PropTypes.func.isRequired,
}; */