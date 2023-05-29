import { useEffect, useState } from 'react';
import { getCast } from '../../helpers/API';

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id)
      .then(({ data: { cast } }) => {
        setCast(cast);
      })
      .catch(error => console.log(error));
  });
  console.log(cast);
  return (
    <ul className="Cast">
      {cast.map(({ id, profile_path, name, character }) => (
        <li className="CastItem" key={id}>
          <img
            src={`https://www.themoviedb.org/t/p/w300${profile_path}`}
            alt="actor"
            className="CastItemPhoto"
            width="150px"
          />
          <p className="CastItemName">{name}</p>
          <p className="CastItemCharacter">{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
