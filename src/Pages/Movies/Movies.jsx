import { Loader } from '../../components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import MoviesList from 'components/MoviesList/MoviesList';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import Notiflix from 'notiflix';

import { fetchWord } from 'api/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setLoading(true);
    setError(false);

    fetchWord(searchQuery)
      .then(data => {
        setList(data.results);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  const onSubmitSearchBar = searchValue => {
    if (searchValue === '') {
      setSearchParams({});
      return Notiflix.Notify.warning('Please enter search word');
    }
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <Searchbar onSubmitSearchBar={onSubmitSearchBar} value={searchQuery} />
      <section>
        {loading && <Loader />}
        {error && (
          <ErrorMessage title="Whoops! Error! Please reload this page!" />
        )}
        {list.length > 0 && <MoviesList list={list} />}
      </section>
    </div>
  );
}
