import { fetchAll, fetchWord } from 'api';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { useState, useEffect } from 'react';

// export const App = () => {
//   const [list, setList] = useState([]);
//   const [query, setQuery] = useState('');
//   useEffect(() => {
//     // setError(false);
//     // setIsLoadMore(false);

//     // if (query === '') {
//     //   return;
//     // }

//     // setLoading(true);
//     // const perPage = 12;
//     fetchAll()
//       .then(data => {
//         const { results } = data;

//         if (results.length === 0) {
//           // noImagesFound();
//           return;
//         }

//         // const totalPages = Math.ceil(totalHits / perPage);

//         // setIsLoadMore(page < totalPages);
//         setList(results);
//       })

//       .catch(() => {
//         // setError(true);
//       })

//       .finally(() => {
//         // setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (query === '') {
//       return;
//     }
//     fetchWord(query)
//       .then(data => {
//         // const { results } = data;
//         console.log(data);

//         // if (results.length === 0) {
//         //   // noImagesFound();
//         //   return;
//         // }
//       })

//       .catch(() => {
//         // setError(true);
//       })

//       .finally(() => {
//         // setLoading(false);
//       });
//   }, [query]);

//   const getValue = value => {
//     setQuery(value);
//   };

//   return (
//     <div>
//       {list && <Home results={list} />}
//       {/* <Movies getValue={getValue} />&& <FilmsList results={ } /> */}
//     </div>
//   );
// };

import { Layout } from '../components/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import MoviesPage from 'Pages/MoviesPage';
import MoviesDetailsPage from 'Pages/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import Notiflix from 'notiflix';

// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
