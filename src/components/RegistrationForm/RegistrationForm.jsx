import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit} autoComplete="off">
        {' '}
        <label className={css.label}>
          {' '}
          Username <input type="text" name="name" />{' '}
        </label>{' '}
        <label className={css.label}>
          {' '}
          Email{' '}
          <input
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
          />{' '}
        </label>{' '}
        <label className={css.label}>
          {' '}
          Password{' '}
          <input
            type="password"
            name="password"
            pattern="(?=.*[a-z])(?=.*[1-9]).{8,}"
            title="The password cannot be less than 7 characters and must contain at least one number, one lowercase latin letter."
          />{' '}
        </label>{' '}
        <button className={css.button} type="submit">
          Register
        </button>{' '}
      </form>
    </div>
  );
};
