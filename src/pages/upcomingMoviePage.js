import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("WatchList" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};
export default MovieListPage;
// import React, { useContext } from "react";
// import PageTemplate from '../components/templateMovieListPage'
// import {MoviesContext} from '../contexts/moviesContext'
// import AddToWatchListButton from '../components/buttons/addToWatchList'

// // const MovieListPage = () => {
// //   const context = useContext(MoviesContext);
// //   const movies = context.movies.filter((m) => {  // New
// //       return !("upcoming" in m);
// //     });
// const MovieListPage = () => {
//   const context = useContext(MoviesContext);
//   const movies = context.movies.filter((m) => {  // New
//     return !("favorite" in m);
//   });
//   return (
//       <PageTemplate 
//         title='No. Movies'
//         movies={context.movies}
//         action={(movie) => {
//           return <AddToWatchListButton movie={movie} /> 
//         }}
//       />
//   );
// };


// export default MovieListPage;
// // import React, { useState, useEffect } from "react";
// // import StubAPI from "../api/stubAPI";
// // import PageTemplate from "../components/templateMovieListPage";
// // import { getMovies } from "../api/tmdb-api";
// // // import useMovie from "../hooks/useMovie";

// // const MovieListPage = () => {

// //     const [movies, setMovies] = useState([]);
// //     useEffect(() => {
// //         getMovies().then(movies => {
// //           setMovies(movies);
// //         });
// //       }, []);
// //       const addToFavorites = movieId => {
// //         setMovies(movies => {
// //           const index = movies.map(m => m.id).indexOf(movieId);
// //           StubAPI.add(movies[index]);
// //           let newMoviesState = [...movies]
// //           newMoviesState.splice(index, 1);
// //           return newMoviesState;
// //         });
// //       };
    
// //       return (
// //           <PageTemplate
// //             title='Discover Movies'
// //             movies={movies}
// //             buttonHandler={addToFavorites}
// //           />
// //       );
// //     };
    
// //     export default MovieListPage;