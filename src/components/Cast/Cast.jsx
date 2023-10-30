import { Loader } from 'components/Loader/Loader';
// import { List, Item } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'api/api';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function Cast() {
  //   const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const params = useParams();

  useEffect(() => {
    if (!params.movieId) {
      return;
    }

    fetchCredits(params.movieId)
      .then(data => {
        setCast(data.cast);
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
      <h3>Cast:</h3>
      {loading && <Loader />}
      {error && (
        <ErrorMessage title="Whoops! Error! Please reload this page!" />
      )}
      {cast.length !== 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'http://placehold.it/100x150&text=no_image'
                }
                alt={name}
                width="100"
                height="150"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any information about cast</p>
      )}
    </>
  );
}