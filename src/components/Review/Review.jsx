import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../helpers/API';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    getReview(movieId)
      .then(({ data: { results } }) => {
        setReviews(results[0]);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      <p> {reviews.content}</p>
    </>
  );
};

export default Review;
