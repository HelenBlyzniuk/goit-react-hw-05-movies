import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMovieById } from '../../helpers/API';
import MovieInfoById from '../../components/MovieInfoById/MovieInfoById';
import css from './MovieId.module.css';
import AdditionalMovieInfo from '../../components/AdditionalMovieInfo/AdditionalMovieInfo';

const MovieId = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backPageLocation = useRef(location.state?.from);

  const [image, setImage] = useState('');
  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [vote, setVote] = useState(0);
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
    <main>
      <Link to={backPageLocation.current} className={css.buttonBack}>
        Back
      </Link>

      <MovieInfoById
        image={image}
        title={title}
        overview={overview}
        genres={genres}
        vote={vote}
      />
      <AdditionalMovieInfo id={movieId} />
    </main>
  );
};
export default MovieId;
