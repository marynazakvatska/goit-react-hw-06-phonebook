import { useState} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';

import Filter from '../Filter/Filter';
import s from './Phonebook.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';




 function Phonebook({contacts, filter, items, addContact, deleteContact, changeFilter}) {


/* 
   const handleSubmit = ({ name, number }) => {
     contacts.find(contact =>
       contact.name.toLowerCase().includes(name.toLowerCase())
         ? alert(`${contact.name}  already exist`)
         :addContact(name, number)
       
     )
   }; */
   


const handleSubmit = ({ name, number }) => {
     items.find(item =>
       item.name.toLowerCase().includes(name.toLowerCase())
         ? alert(`${item.name}  already exist`)
         :addContact(name, number)
       
      )};

   

 /*  const addContact = ( name, number ) => {
    
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    console.log(contact)
    setContacts(contacts=>[contact, ...contacts])
  }
     
     
   const deleteContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId)
    )
}
     
     
    
   const changeFilter = filter => setFilter(filter.toLowerCase()); */
 
/*  const  visibleContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
 }
   */

    return (
        <div className={s.section}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm onSubmit={ handleSubmit}/>

            <h2 className={s.title_contact}>Contacts</h2>
        <Filter /* className={s.filter_label}
          value={filter} onChange={() =>
            changeFilter()} */ />
            
        <ContactList /* contacts={visibleContacts()} 
          contacts={contacts} onDeleteContact={() =>
            deleteContact(contacts)} */  />
       
      </div>
    );
}


const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
    items: state.contacts.items,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    addContact: (items) => dispatch(actions.addContact(items)),
    deleteContact: (items) => dispatch(actions.deleteContact(items)),
    changeFilter: () => dispatch(actions.changeFilter),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook)

/* export default Phonebook */