// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movies = () => {
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
  };

  useEffect(() => {});
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            type="text"
            value={query}
            name="query"
          />
        </label>
        <button type="submit"></button>
      </form>
      <h1>Movies</h1>
      <ul className="popularMovies">
        <li></li>
      </ul>
    </main>
  );
};
export default Movies;
