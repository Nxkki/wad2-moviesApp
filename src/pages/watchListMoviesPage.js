import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const upcoming = context.movies.filter( m => m.upcoming )
  return (
    <MovieListPageTemplate
      movies={upcoming}
      title={"upcoming Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListMoviesPage;
