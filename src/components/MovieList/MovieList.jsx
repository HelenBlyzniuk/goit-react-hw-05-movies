import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

import css from 'components/MovieList/MovieList.module.css';

const MovieList = ({ listName, films }) => {
  const location = useLocation();
  const backPageLocation = useRef(location.state?.from);
  console.log('backPageLocation', backPageLocation);
  console.log('MovieList:', location);
  return (
    <ul className={css.searchMovies}>
      {listName}
      {films.map(({ title, id }) => (
        <li key={id} className={css.searchMovieItem}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
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
  location: PropTypes.object.isRequired,
};
