import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import css from 'components/MovieList/MovieList.module.css';

const MovieList = ({ listName, films, state }) => {
  // const location = useLocation();
  // console.log(location);
  return (
    <ul className={css.searchMovies}>
      {listName}
      {films.map(({ title, id }) => (
        <li key={id} className={css.searchMovieItem}>
          <Link to={`/movies/${id}`} state={state}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;

MovieList.propTypes = {
  listName: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
};
