import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;
// import React from "react";
// import StubAPI from "../api/stubAPI";
// import PageTemplate from "../components/templateMovieListPage";

// const FavoriteMoviesPage = props => {
//   const toDo = () => true;

//   return (
//     <PageTemplate
//       movies={StubAPI.getAll()}
//       title={"Favorite Movies"}
//       buttonHandler={toDo}
//     />
//   );
// };

// export default FavoriteMoviesPage;

// // import React from "react";

// // const FavoriteMoviesPage = () => {
// //     return <h2>Favorite Movies</h2>
// // }

// // export default FavoriteMoviesPage