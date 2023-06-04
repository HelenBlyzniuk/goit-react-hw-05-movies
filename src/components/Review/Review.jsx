import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../helpers/API';
import css from './Review.module.css';
const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReview(movieId)
      .then(({ data: { results } }) => {
        setReviews(results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={css.reviewList}>
      {reviews.length === 0 && <div>Sorry, there are no reviews left</div>}
      {reviews.map(({ author, content, id }) => (
        <li key={id} className={css.reviewItem}>
          <p className={css.reviewAuthor}>{author}:</p>
          <p className={css.reviewText}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Review;
