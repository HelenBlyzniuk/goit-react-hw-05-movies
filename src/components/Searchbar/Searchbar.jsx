import { useState } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';
const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Make your request');
      return;
    }
    onSubmit(query);
  };
  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <label>
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          value={query}
          name="query"
        />
      </label>
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
