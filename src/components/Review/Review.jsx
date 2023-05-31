import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../helpers/API';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  // ({ data: { results } }
  useEffect(() => {
    getReview(movieId)
      .then(({ data: { results } }) => {
        setReviews(results);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      {reviews.length === 0 && <div>Sorry, there are no reviews left</div>}
      {reviews.map(({ author, content, id }) => (
        <ul>
          <li key={id}>
            {author}:{content}
          </li>
        </ul>
      ))}
    </>
  );
};

export default Review;
