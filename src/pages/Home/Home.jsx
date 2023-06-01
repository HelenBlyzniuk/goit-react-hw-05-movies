import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../helpers/API';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);
  const state = { from: location };
  useEffect(() => {
    getTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <main>
      <MovieList listName={'Trending today'} films={movies} state={state} />
    </main>
  );
};
export default Home;
