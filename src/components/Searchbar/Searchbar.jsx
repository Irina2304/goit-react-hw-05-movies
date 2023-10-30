// import {
//   SearchBar,
//   SearchForm,
//   SearchFormButton,
//   SearchFormInput,
// } from './Search.styled';

export const Searchbar = ({ onSubmitSearchBar, value }) => (
  <header>
    <form onSubmit={onSubmitSearchBar}>
      <button>
        <span>Search</span>
      </button>

      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        defaultValue={value}
        placeholder="Search movies"
      />
    </form>
  </header>
);
