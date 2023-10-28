import { fetchWord } from '../api';
import { useState, useEffect } from 'react';
import { Movies } from '../components/Movies/Movies';
import { FilmsList } from 'components/FilmsList/FilmsList';

export default function MoviesPage() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchWord(query)
      .then(data => {
        const { results } = data;
        console.log(results);

        if (results.length === 0) {
          // noImagesFound();
          return;
        }
        setList(results);
      })

      .catch(() => {
        setError(true);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const getValue = value => {
    setQuery(value);
  };

  return (
    <div>
      <Movies getValue={getValue} />
      <FilmsList results={list} />
    </div>
  );
}
