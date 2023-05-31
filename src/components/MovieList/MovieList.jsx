import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from 'components/MovieList/MovieList.module.css';

const MovieList = ({ listName, films }) => {
  return (
    <ul className={css.searchMovies}>
      {listName}
      {films.map(({ title, id }) => (
        <li key={id} className={css.searchMovieItem}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;

MovieList.propTypes = {
  listName: PropTypes.string.isRequired,
  films: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
