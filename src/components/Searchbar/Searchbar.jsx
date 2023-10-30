import { Form, Btn, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmitSearchBar, value }) => (
  <div>
    <Form onSubmit={onSubmitSearchBar}>
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
