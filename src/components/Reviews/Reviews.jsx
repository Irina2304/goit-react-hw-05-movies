import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/api';
import { Loader } from '../Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function Reviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  const params = useParams();

  useEffect(() => {
    if (!params.movieId) {
      return;
    }

    fetchReviews(params.movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.movieId]);

  return (
    <>
      <h3>Reviews:</h3>
      {loading && <Loader />}
      {error && (
        <ErrorMessage title="Whoops! Error! Please reload this page!" />
      )}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any reviews for this movie</p>
      )}
    </>
  );
}
