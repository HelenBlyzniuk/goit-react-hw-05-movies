import { Link, Outlet } from 'react-router-dom';
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
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdditionalMovieInfo;
