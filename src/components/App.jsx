import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/contactSlice';
import { getContact, getFilterWord } from '../redux/selectors';
import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContact);
  const filterWord = useSelector(getFilterWord);

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem('contacts')));
  //   const data = localStorage.getItem('contacts')
  //     ? JSON.parse(localStorage.getItem('contacts'))
  //     : initialContacts;
  //   setContacts(data);
  // }, []);

  // useEffect(() => {
  //   console.log(contacts);
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const newContacts = newContactData => {
    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(newContactData.name.toLowerCase())
    );
    findContact
      ? alert(`${newContactData.name} is already in contact`)
      : dispatch(addItem(newContactData));
  };

  const isVisibleContacts = () => {
    if (filterWord) {
      const normalizeFilter = filterWord.toLowerCase();

      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizeFilter)
        );
      }
    }
    return contacts;
  };

  return (
    <div>
      <h1 className={css.setion_title}>Phonebook</h1>

      <ContactForm onSubmit={newContacts} />

      <Filter />
      <h2 className={css.setion_title}>Contacts</h2>
      <ContactList contacts={isVisibleContacts()} />
    </div>
  );
};
