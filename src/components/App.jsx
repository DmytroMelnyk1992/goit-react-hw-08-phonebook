import React from 'react';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <h1 className={css.setion_title}>Phonebook</h1>

      <ContactForm />

      <Filter />
      <h2 className={css.setion_title}>Contacts</h2>
      <ContactList />
    </div>
  );
};
