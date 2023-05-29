import PropTypes from 'prop-types';
import css from './MovieInfoById.module.css';
const MovieInfoById = ({ image, title, overview, genres, vote }) => {
  return (
    <div className={css.wrapper}>
      <img
        src={`https://www.themoviedb.org/t/p/w300${image}`}
        alt="backdrop"
        width="240px"
      />
      <ul className={css.movieInfo}>
        {title}
        <li className={css.movieInfoItem}>
          User Score: <span className={css.movieInfoItemText}>{vote}</span>
        </li>
        <li className={css.movieInfoItem}>
          Overview:
          <span className={css.movieInfoItemText}> {overview}</span>
        </li>
        <li className={css.movieInfoItem}>
          Genres:
          {genres.map(({ id, name }) => (
            <span className={css.movieInfoItemText} key={id}>
              {name}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
};

MovieInfoById.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  vote: PropTypes.number.isRequired,
};

export default MovieInfoById;
