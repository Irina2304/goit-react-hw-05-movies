import { Form, Btn, Input } from './Searchbar.styled';
import Notiflix from 'notiflix';

export const Searchbar = ({ onSubmitSearchBar, value }) => {
  const onSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.currentTarget.elements.search.value;
    if (searchValue === '') {
      return Notiflix.Notify.warning('Please enter search word');
    }
    onSubmitSearchBar(searchValue);
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Btn>
          <span>Search</span>
        </Btn>

        <Input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          defaultValue={value}
          placeholder="Search movies"
        />
      </Form>
    </div>
  );
};
