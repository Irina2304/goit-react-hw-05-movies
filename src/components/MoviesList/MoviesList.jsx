import { Link, useLocation } from 'react-router-dom';
import { List, Wrap, FilmName } from './MoviesList.styled';

export default function MoviesList({ list }) {
  const location = useLocation();

  return (
    <List>
      {list.map(({ id, title, name, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Wrap>
              <img
                src={
                  poster_path
                    ? `http://image.tmdb.org/t/p/w154${poster_path}`
                    : 'http://placehold.it/154x231&text=no_image'
                }
                alt={title || name}
                width="154"
                height="231"
              />

              <FilmName>{title || name}</FilmName>
            </Wrap>
          </Link>
        </li>
      ))}
    </List>
  );
}
