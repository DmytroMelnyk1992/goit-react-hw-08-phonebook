import { useDispatch } from 'react-redux';
import { filterItems } from '../../redux/contactSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label htmlFor="filter">
      <h2 className={css.title}>Find contacts by name</h2>
      <div className={css.input}>
        <input
          type="text"
          name="filter"
          onChange={e => dispatch(filterItems(e.currentTarget.value))}
        />{' '}
      </div>
    </label>
  );
};

export default Filter;
