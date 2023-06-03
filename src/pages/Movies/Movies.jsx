import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'helpers/API';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [setError] = useState(null);

  const getQuery = value => {
    if (value === query) {
      return;
    }
    setQuery(value);
    setStatus('pending');
  };

  useEffect(() => {
    getMovieByQuery(query)
      .then(({ data: { results } }) => {
        setMovies(results);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error.messege);
        setStatus('rejected');
        setError(error);
      });
  }, [query, setError]);
  return (
    <main>
      <Searchbar onSubmit={getQuery} />
      {status === 'pending' && (
        <div>
          <Loader />
        </div>
      )}
      {movies.length > 0 && <MovieList listName={'Movies'} films={movies} />}
      {query && movies.length === 0 && status !== 'pending' && (
        <Notification
          text={`Sorry, there are no films on your request. Make a new request or correct
      your previous one`}
        />
      )}
    </main>
  );
};
export default Movies;
