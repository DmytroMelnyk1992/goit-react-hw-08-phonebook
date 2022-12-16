import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from 'redux/contactOperations';
import { getItems } from 'redux/contactSelectors';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log("There isn't such case");
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const newName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (newName) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    dispatch(addContacts(newContact));
    reset();
  };
  return (
    <section className={css.container}>
      <form className={css.container} onSubmit={onFormSubmit}>
        <label>
          <p className={css.title}>Name</p>

          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="number">
          <p className={css.title}>Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.add} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
}
