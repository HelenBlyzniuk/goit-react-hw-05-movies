import { Link } from 'react-router-dom';
// import { useParams } from 'react';
const MovieId = () => {
  //   console.log(useParams());

  return (
    <>
      <div>
        <img src="" alt="" />
        <ul>
          Title
          <li>
            User Score,<span>3</span>
          </li>
          <li>
            Overview
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta
              quod iure culpa! Porro doloribus ea accusamus quia, dolore eos
              beatae quos, debitis autem itaque obcaecati amet repudiandae!
              Ducimus, excepturi?
            </span>
          </li>
          <li>
            genres<span>comedy,drama</span>
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
