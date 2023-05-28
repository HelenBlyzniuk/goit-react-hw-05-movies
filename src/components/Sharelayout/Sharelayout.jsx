import { NavLink } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
    </div>
  );
};
export default SharedLayout;
