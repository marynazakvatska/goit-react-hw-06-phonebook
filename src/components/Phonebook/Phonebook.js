
import './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';
import Filter from '../Filter/Filter';
import s from './Phonebook.module.css';





 function Phonebook({contacts, addContact}) {



/*    const handleSubmit = ({ name, number }) => {
     contacts.find(contact =>
       contact.name.toLowerCase().includes(name.toLowerCase())
         ? alert(`${contact.name}  already exist`)
         :addContact(name, number)
       
     )
   };
   
    */
   
    return (
        <div className={s.section}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />

            <h2 className={s.title_contact}>Contacts</h2>
        <Filter /* className={s.filter_label}
          value={filter} onChange={() =>
            changeFilter()} */ />
            
        <ContactList  />
       
      </div>
    );
}


export default Phonebook