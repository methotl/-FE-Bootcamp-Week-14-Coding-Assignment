import React, { useState} from 'react';
import StarRating from './StarRating';

const ReviewForm = () => {
  const [movieReview, setMovieReview] = useState('');

  const handleSubmit = event => {
      event.preventDefault(); // prevent page refresh

    // clear all input values in the form
    setMovieReview('');
  };

  //movie review input, having difficutly getting this part to work, star rating element is working though
  return (
    <div>
      <h2>Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="movie_review"
          name="movie_review"
          type="text"
          onChange={event => setMovieReview(event.target.value)}
          value={movieReview}
        />
        <br></br>
        <StarRating/>
        <br></br>
        <button btn-primary type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;