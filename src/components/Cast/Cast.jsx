import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../helpers/API';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId)
      .then(({ data: { cast } }) => {
        if (cast.length > 12) {
          setCast(cast.slice(0, 12));
        } else {
          setCast(cast);
        }
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={css.cast}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li className="CastItem" key={id}>
          {profile_path === null && (
            <img src="src/image/default_avatar.jpg" alt="hero" width="150" />
          )}
          {profile_path !== null && (
            <img
              src={`https://www.themoviedb.org/t/p/w300${profile_path}`}
              alt="actor"
              className="CastItemPhoto"
              width="150px"
            />
          )}
          <p className="CastItemName">{name}</p>
          <p className="CastItemCharacter">{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
