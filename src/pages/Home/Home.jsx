import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../helpers/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    getTrendingMovies()
      .then(response => console.log(response))
      .catch(error => console.log(error.message));
  }, []);
  return (
    <main>
      <h1>Trending today</h1>

      <ul className="popularMovies">
        <li>
          <Link to="/movies/:movieId">Film</Link>
        </li>
      </ul>
    </main>
  );
};
export default Home;
