import { Outlet, NavLink } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
