import { Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieId from 'pages/MovieId/MovieId';
import Cast from './Cast/Cast';
import Review from './Review/Review';
// import SharedLayout from './Sharelayout/Sharelayout';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className="nav">
          <Link to="/" className={css.navLink}>
            Home
          </Link>
          <Link to="/movies" className={css.navLink}>
            Movies
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieId />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
};
