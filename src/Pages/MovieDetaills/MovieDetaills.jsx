import { Loader } from '../../components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchId } from 'api/api';
import { Section, Back, Wrap, Title, List } from './MovieDetaills.styled';

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  const params = useParams();

  useEffect(() => {
    setError(false);
    setLoading(true);
    if (!params.movieId) {
      return;
    }

    fetchId(params.movieId)
      .then(data => {
        setDetails(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.movieId]);

  if (!details) {
    return;
  }

  const {
    poster_path,
    title,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
  } = details;

  return (
    <Section>
      <Back>
        <Link to={backLinkRef.current}>{'GO BACK'}</Link>
      </Back>

      <Title>Movie Details:</Title>
      {loading && <Loader />}
      {error && (
        <ErrorMessage title="Whoops! Error! Please reload this page!" />
      )}
      {details && (
        <>
          <Wrap>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342${poster_path}`
                  : 'https://placehold.it/200x300&text=no_image'
              }
              alt={title}
              width="200"
            />
            <div>
              <h3>{original_title}</h3>
              <p>
                <b>Release date:</b> {release_date}
              </p>
              <p>
                <b>Genres:</b>{' '}
                {genres.map(({ name }) => `${name.toLowerCase()} | `)}
              </p>
              <p>
                <b>Rating:</b> {vote_average}
              </p>
              <p>
                <b>Overview:</b> {overview}
              </p>
            </div>
          </Wrap>
          <h3>Additional information:</h3>
          <List>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </List>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Section>
  );
}
