export const Searchbar = ({}) => {
  // const getId = evt => {
  //   evt.preventDefault();
  //   const value = evt.currentTarget.elements.input.value;
  //   getValue(value);
  //};
  return (
    <div className="searchbar">
      <form onSubmit={onSubmit} className="form">
        <input className="input" name="input" type="text" autoFocus />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};
