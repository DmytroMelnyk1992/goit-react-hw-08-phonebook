import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChangeFilter, filter }) => {
  return (
    <label htmlFor="filter">
      <h2 className={css.title}>Find contacts by name</h2>
      <div className={css.input}>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </div>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

export default Filter;
