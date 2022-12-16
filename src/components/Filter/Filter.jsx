import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/contactSelectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onFilterContact = event => {
    dispatch(filterContacts(event.target.value.toLowerCase()));
  };

  return (
    <label>
      <h2 className={css.title}>Find contacts by name</h2>
      <div className={css.input}>
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={onFilterContact}
        />
      </div>
    </label>
  );
};

export default Filter;
