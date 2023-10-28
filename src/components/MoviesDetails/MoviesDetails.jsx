import { Link } from 'react-router-dom';

export const MoviesDetails = ({ results }) => {
  const apiKey = '024cc5f09908565df80effcaf2ef8e5e';
  const {
    title,
    name,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
  } = results;

  const patch = `https://image.tmdb.org/t/p/w500${poster_path}?api_key=${apiKey}`;
  return (
    <div className="moviesDetails">
      <h1>{title || name}</h1>
      <p>
        <b>Release date:</b> {release_date}
      </p>
      <p>
        <b>User Score:</b> {Math.round(popularity)}%
      </p>
      <p>
        <b>Owerview:</b> {overview}
      </p>
      <div>
        <p>
          <b>Genres:</b>
        </p>
        <ul>
          {genres.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <img src={patch} alt="" />
    </div>
  );
};
