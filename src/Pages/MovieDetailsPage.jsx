import { fetchId } from '../api';
import { useState, useEffect } from 'react';
import { MoviesDetails } from '../components/MoviesDetails/MoviesDetails';

export default function MoviesDetailsPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [details, setDetails] = useState(false);

  const getId = () => {
    const savedId = localStorage.getItem('id');
    if (savedId !== null) {
      setId(JSON.parse(savedId));
    }
  };

  useEffect(() => {
    // if (id === '') {
    //   return;
    // }
    fetchId(id)
      .then(data => {
        // const { results } = data;
        console.log(data);

        // if (results.length === 0) {
        //   // noImagesFound();
        //   return;
        // }
        setDetails(data);
      })

      .catch(() => {
        setError(true);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <div>{details && <MoviesDetails results={details} />}</div>;
}
