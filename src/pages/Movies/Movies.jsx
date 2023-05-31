import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'helpers/API';
import Searchbar from 'components/Searchbar/Searchbar';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const getQuery = value => {
    if (value === query) {
      return;
    }
    setQuery(value);
  };

  useEffect(() => {
    getMovieByQuery(query)
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => {
        console.log(error.messege);
      });
  }, [query]);
  return (
    <main>
      <Searchbar onSubmit={getQuery} />
      {movies.length > 0 && (
        <ul className="searchMovies">
          Movies
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
      {query && movies.length === 0 && (
        <div>
          Sorry, there are no films on your request. Make a new request or
          correct your previous one
        </div>
      )}
    </main>
  );
};
export default Movies;
