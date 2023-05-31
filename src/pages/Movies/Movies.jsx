import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'helpers/API';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import Notification from 'components/Notification/Notification';

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
      {movies.length > 0 && <MovieList listName={'Movies'} films={movies} />}
      {query && movies.length === 0 && (
        <Notification
          text={`Sorry, there are no films on your request. Make a new request or correct
      your previous one`}
        />
      )}
    </main>
  );
};
export default Movies;
