import { Link } from 'react-router-dom';
import Review from '../../components/Review/Review';
import css from './AdditionalMovieInfo.module.css';
const AdditionalMovieInfo = ({ id }) => {
  return (
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
            Reviews <Review />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalMovieInfo;
