import { fetchId } from '../api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MoviesDetails } from '../components/MoviesDetails/MoviesDetails';

export default function MoviesDetailsPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [id, setId] = useState('');
  const [details, setDetails] = useState();

  const params = useParams();
  // console.log(params.movieId);

  useEffect(() => {
    // if (id === '') {
    //   return;
    // }
    fetchId(params.movieId)
      .then(data => {
        // const { results } = data;
        // console.log(data);

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
  }, [params.movieId]);

  return (
    <div>
      {details && <MoviesDetails results={details} />}
      <Outlet />
    </div>
  );
}
