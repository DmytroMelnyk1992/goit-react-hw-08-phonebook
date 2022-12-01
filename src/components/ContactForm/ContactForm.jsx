import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

//change class into function (hooks)//

export default function ContactForm({ newContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleDataChange = event => {
    const { value } = event.currentTarget;
    event.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    newContacts(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <section className={css.container}>
      <form className={css.container} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p className={css.title}>Name</p>

          <input
            type="text"
            name="name"
            value={name}
            onChange={handleDataChange}
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
            onChange={handleDataChange}
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

ContactForm.propTypes = {
  newContacts: PropTypes.func.isRequired,
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//     id: '',
//   };

//   contactInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const newContact = {
//       id: nanoid(5),
//       name: this.state.name,
//       number: this.state.number,
//     };
//     const isUnique = this.props.newContact(newContact);

//     if (isUnique) {
//       this.setState({
//         name: '',
//         number: '',
//       });
//     }
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '', id: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <section className={css.container}>
//         <form className={css.container} onSubmit={this.handleSubmit}>
//           <label htmlFor="name">
//             <p className={css.title}>Name</p>

//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.contactInputChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>

//           <label htmlFor="number">
//             <p className={css.title}>Number</p>
//             <input
//               type="tel"
//               name="number"
//               value={number}
//               onChange={this.contactInputChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button className={css.add} type="submit">
//             Add contact
//           </button>
//         </form>
//       </section>
//     );
//   }
// }
