import { Loader } from '../../components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchWord } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Searchbar } from '../../components/Searchbar/Searchbar';

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
    if (list.length > 0) {
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
  }, [list, searchQuery]);

  const onSubmitSearchBar = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.search.value;

    if (searchValue === '') {
      setSearchParams({});
      setList([]);
      return;
    }

    setSearchParams({ query: searchValue });
    setList([]);
  };

  return (
    <div>
      <Searchbar onSubmitSearchBar={onSubmitSearchBar} value={searchQuery} />
      <section>
        {loading && <Loader />}
        {error && (
          <ErrorMessage title="Whoops! Error! Please reload this page!" />
        )}
        <MoviesList list={list} />
      </section>
    </div>
  );
}
