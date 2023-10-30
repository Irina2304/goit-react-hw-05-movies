import { Loader } from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchAll } from 'api/api';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MoviesList from 'components/MoviesList/MoviesList';
import { PageName, SectionHome } from './Home.styled';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

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
  }, [list]);

  return (
    <SectionHome>
      <PageName>Trending today:</PageName>
      {loading && <Loader />}
      {error && (
        <ErrorMessage title="Whoops! Error! Please reload this page!" />
      )}
      <MoviesList list={list} />
    </SectionHome>
  );
}
