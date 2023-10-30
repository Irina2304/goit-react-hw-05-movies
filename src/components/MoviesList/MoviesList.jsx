import { Link, useLocation } from 'react-router-dom';
// import { List, Item, WrapperCard } from './MoviesList.styled';

export default function MoviesList({ list }) {
  const location = useLocation();
  console.log(list);

  return (
    <ul>
      {list.map(({ id, title, name, poster_path }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <li key={id}>
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
            <div>
              <h3>{title || name}</h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
