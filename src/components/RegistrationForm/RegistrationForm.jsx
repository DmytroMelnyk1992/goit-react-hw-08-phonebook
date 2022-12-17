import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      {' '}
      <label>
        {' '}
        Username <input type="text" name="name" />{' '}
      </label>{' '}
      <label>
        {' '}
        Email{' '}
        <input
          type="email"
          name="email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
        />{' '}
      </label>{' '}
      <label>
        {' '}
        Password{' '}
        <input
          type="password"
          name="password"
          pattern="(?=.*[a-z])(?=.*[1-9]).{8,}"
          title="The password cannot be less than 7 characters and must contain at least one number, one lowercase latin letter."
        />{' '}
      </label>{' '}
      <button type="submit">Register</button>{' '}
    </form>
  );
};
