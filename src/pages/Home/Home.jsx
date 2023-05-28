import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../helpers/API';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => console.log(error.message));
  }, []);
  console.log(movies);
  return (
    <main>
      <h1>Trending today</h1>

      <ul className="popularMovies">
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to="/movies/:movieId">{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Home;
