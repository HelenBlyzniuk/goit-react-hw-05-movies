import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../helpers/API';

const MovieId = () => {
  const { movieId } = useParams();
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [vote, setVote] = useState('');
  const [overview, setOverview] = useState('');

  useEffect(() => {
    getMovieById(movieId)
      .then(
        ({
          data: {
            backdrop_path,
            genres,
            original_title,
            overview,
            vote_average,
          },
        }) => {
          console.log(
            backdrop_path,
            genres,
            original_title,
            overview,
            vote_average
          );
          setImage(backdrop_path);
          setGenres(genres);
          setTitle(original_title);
          setOverview(overview);
          setVote(vote_average);
        }
      )
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <>
      <div>
        <img src={image} alt="backdrop" width="240px" />
        <ul>
          {title}
          <li>
            User Score:<span>{vote}</span>
          </li>
          <li>
            Overview
            <span>{overview}</span>
          </li>
          <li>
            genres:
            {genres.map(({ id, name }) => (
              <span key={id}> {name.toLowerCase()} </span>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <h2>Additional Infor</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MovieId;
