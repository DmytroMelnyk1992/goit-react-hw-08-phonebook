/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('contacts')));
    const data = localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : initialContacts;
    setContacts(data);
  }, []);

  useEffect(() => {
    console.log(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const newContacts = (name, number) => {
    const newContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (newContact) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    // eslint-disable-next-line no-undef
    setContacts(prev=>[...prev, { id: nanoid(), name, number }]);
  };

  const onChangeFilter = event => setFilter(event.target.value);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContacts = id => {
    const newArray = contacts.filter(el => el.id !== id);
    setContacts(newArray);
  };

  return (
    <div>
      <h1 className={css.setion_title}>Phonebook</h1>

      <ContactForm newContacts={newContacts} />

      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <h2 className={css.setion_title}>Contacts</h2>
      <ContactList
        contacts={filteredContacts}
        deleteContacts={deleteContacts}
      />
    </div>
  );
}
