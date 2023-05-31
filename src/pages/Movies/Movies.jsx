import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'helpers/API';
import Searchbar from 'components/Searchbar/Searchbar';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const getQuery = value => {
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
    </main>
  );
};
export default Movies;
