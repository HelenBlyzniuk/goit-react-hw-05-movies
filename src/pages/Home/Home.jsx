import { Link } from 'react-router-dom';
const Home = ({ movies }) => {
  return (
    <main>
      <h1>Trending today</h1>
      {movies.map({})}
      <ul className="popularMovies">
        <li>
          <Link to="/movies/:movieId">Film</Link>
        </li>
      </ul>
    </main>
  );
};
export default Home;
