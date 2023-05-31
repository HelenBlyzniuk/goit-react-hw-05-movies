import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../helpers/API';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <main>
      <MovieList listName={'Trending today'} films={movies} />
    </main>
  );
};
export default Home;
