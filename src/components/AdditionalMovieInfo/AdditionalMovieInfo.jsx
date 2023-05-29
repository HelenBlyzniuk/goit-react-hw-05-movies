import { Link } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import css from './AdditionalMovieInfo.module.css';
const AdditionalMovieInfo = ({ id }) => {
  return (
    <div className={css.addInfo}>
      <h2 className={css.addInfoTitle}>Additional Information</h2>
      <ul className={css.addInfoList}>
        <li className={css.addInfoiItem}>
          <Link className={css.addInfoLink} to="cast">
            Cast <Cast id={id} />
          </Link>
        </li>
        <li className={css.addInfoiItem}>
          <Link className={css.addInfoLink} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalMovieInfo;
