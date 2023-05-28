import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../helpers/API';
import css from './MovieId.module.css';

const MovieId = () => {
  const { movieId } = useParams();
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [vote, setVote] = useState('');
  const [overview, setOverview] = useState('');

  useEffect(() => {
    getMovieById(movieId)
      .then(
        ({
          data: {
            backdrop_path,
            genres,
            original_title,
            overview,
            vote_average,
          },
        }) => {
          console.log(
            backdrop_path,
            genres,
            original_title,
            overview,
            vote_average
          );
          setImage(backdrop_path);
          setGenres(genres);
          setTitle(original_title);
          setOverview(overview);
          setVote(vote_average);
        }
      )
      .catch(error => console.log(error.message));
  }, [movieId]);
  console.log(image);
  return (
    <div>
      <div className={css.wrapper}>
        <img
          src={`https://www.themoviedb.org/t/p/w300${image}`}
          alt="backdrop"
          width="240px"
        />
        <ul className={css.movieInfo}>
          {title}
          <li className={css.movieInfoItem}>
            User Score:<span className={css.movieInfoItemText}>{vote}</span>
          </li>
          <li className={css.movieInfoItem}>
            Overview:
            <span className={css.movieInfoItemText}> {overview}</span>
          </li>
          <li className={css.movieInfoItem}>
            Genres:
            {genres.map(({ id, name }) => (
              <span className={css.movieInfoItemText} key={id}>
                {' '}
                {name}{' '}
              </span>
            ))}
          </li>
        </ul>
      </div>
      <div className={css.addInfo}>
        <h2 className={css.addInfoTitle}>Additional Information</h2>
        <ul className={css.addInfoList}>
          <li className={css.addInfoiItem}>
            <Link className={css.addInfoLink} to="cast">
              Cast
            </Link>
          </li>
          <li className={css.addInfoiItem}>
            <Link className={css.addInfoLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MovieId;
