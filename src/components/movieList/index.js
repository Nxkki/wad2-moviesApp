import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

// const MovieList = props => {
//   const movieCards = props.movies.map(m => (
//     <Movie key={m.id} movie={m} />
//   ));
//   return <div className="row movies bg-info">{movieCards}</div>;
// };
// movie app2 part 4
const MovieList = props => {
  const movieCards = props.movies.map(m => (
    <Movie key={m.id} movie={m} buttonHandler={props.buttonHandler} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default MovieList;