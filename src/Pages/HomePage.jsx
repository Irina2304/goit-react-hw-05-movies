import { fetchAll } from '../api';
import { Home } from '../components/Home/Home';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);

    fetchAll()
      .then(data => {
        const { results } = data;

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
  }, []);

  return <div>{list && <Home results={list} />}</div>;
}
