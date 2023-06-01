import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import css from './AdditionalMovieInfo.module.css';
import Loader from 'components/Loader/Loader';
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AdditionalMovieInfo;

AdditionalMovieInfo.propTypes = {
  id: PropTypes.string.isRequired,
};
