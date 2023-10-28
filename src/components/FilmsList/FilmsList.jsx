export const FilmsList = ({ results }) => {
  const onClick = evt => {
    // console.log(evt.currentTarget.id);
    const id = evt.currentTarget.id;
    localStorage.setItem('id', JSON.stringify(id));
  };
  return (
    <ul className="gallery">
      {results.map(item => (
        <li id={item.id} key={item.id} onClick={onClick}>
          <p>{item.title || item.name}</p>
        </li>
      ))}
    </ul>
  );
};
