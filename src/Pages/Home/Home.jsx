import { Loader } from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchAll } from 'api/api';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
// import { SectionMain } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    if (list.length > 0) {
      return;
    }
    fetchAll()
      .then(data => {
        setList(data.results);
      })
      .catch(() => {
        setError(true);
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(list);

  return (
    <section>
      <h2>Trending today</h2>
      {loading && <Loader />}
      {error && (
        <ErrorMessage title="Whoops! Error! Please reload this page!" />
      )}
      <MoviesList list={list} />
    </section>
  );
}
