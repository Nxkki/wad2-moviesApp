import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext,} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchList";

const UpcomingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("watchList" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcoming}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};
export default UpcomingMovieListPage;

