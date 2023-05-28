import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import SharedLayout from './Sharelayout/Sharelayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<div>Movie details</div>}>
          <Route path="cast" element={<div>Movie cast</div>} />
          <Route path="reviews" element={<div>Movie review</div>} />
        </Route>
      </Routes>
    </div>
  );
};
