import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contactSelectors';
import { deleteContacts, getContacts } from 'redux/contactOperations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const deteteContacts = id => {
    dispatch(deleteContacts(id));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={css.contacts}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                className={css.delete}
                name={id}
                onClick={() => deleteContacts(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
