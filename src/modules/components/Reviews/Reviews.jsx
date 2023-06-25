import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from 'services/fetchAPI';
import { Review } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetchAPI(`movie/${movieId}/reviews`)
      .then(({ total_results, results }) => {
        if (!total_results) {
          setReviews(null);
          return;
        }
        setReviews(results);
      })
      .catch(err => console.error(err));
  }, [movieId]);
  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <Review key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </Review>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
}
