import { Link } from 'react-router-dom';

export const FilmsList = ({ results }) => {
  return (
    <ul className="gallery">
      {results.map(item => (
        <Link to={`/movies/${item.id}`} key={item.id}>
          <li id={item.id}>
            <p>{item.title || item.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};
