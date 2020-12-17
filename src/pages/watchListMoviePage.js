import React, { useContext } from "react";
import UpcomingmMoviesPageTemplate from "../components/templateUpcomingMoviesPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviePage = props => {
  const context = useContext(MoviesContext);
  const watchlists = context.upcoming.filter((m) =>
   {  // New  
     return "watchList" in m});
    // const watchlists = context.upcoming.filter( m => m.watchlist )
  // const watchlists = context.upcoming.filter( m => m.watchlist )
  return (
    <UpcomingmMoviesPageTemplate
      movies={watchlists}
      title={"Watchlist Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListMoviePage;