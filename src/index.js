import AddMovieReviewPage from './pages/addMovieReviewPage'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import UpcomingMoviePage from './pages/upcomingMoviePage'
import WatchListMoviePage from './pages/watchListMoviePage'
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import PopularMoviesPage from './pages/popularMoviesPage'
import LoginPage from "./loginPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext";


// import TopRatedMoviesContextProvider from "./contexts/topRatedMoviesContext";
// import topRatedMoviesPage from "./pages/topRatedMoviesPage";
// //m3p5
// const App = () => {
//   return (
//     <BrowserRouter>
//     <div className="jumbotron">
//       <div className="container-fluid">
//         <ul className="navbar-nav text-black">
//           <li className="nav-item">
//             <Link className="nav-link " to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link " to="/movies/favorites">
//               Favorites
//             </Link>
//           </li>
//         </ul>
//         <Switch>

const App = () => {
  return (
      <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>
           <Switch> 
           <Route path="/login" component={LoginPage} />
             <Route path="/movies/popular" component={PopularMoviesPage} />
              <PrivateRoute path="/movies/watchlist" component= {WatchListMoviePage}/>
              <Route path="/movies/topRated" component={TopRatedMoviesPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviePage}/>     
              <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch> 
        </GenresContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
    </AuthProvider>
  </BrowserRouter>
  );
};
// movie app2 part 4
// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="jumbotron">
//         <div className="container-fluid">
//           <Switch>
//             <Route path="/movies/:id" component={MoviePage} />
//             <Route path="/" component={HomePage} />
//             <Redirect from="*" to="/" />
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

//ma2 p4
// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));

// import MoviePage from './pages/movieDetailsPage'
// import React from "react";
// import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import HomePage from "./pages/homePage";

// const sample = {
  //image.tmdb.org/t/p/w300_and_h450_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg 1x, //image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg 2x
//   adult: false,
//   backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
//   belongs_to_collection: {
//     id: 10,
//     name: "Joker",
//     poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
//     backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
//   },
//   budget: $55,000,000.00,
//   genres: [
//     {
//       id: 14,
//       name: "Fantasy"
//     },
//     {
//       id: 12,
//       name: "Crime"
//     },
//     {
//       id: 878,
//       name: "Thriller"
//     },
//     {
//       id: 28,
//       name: "Drama"
//     }
//   ],
//   homepage:
//     "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
//   id: 181808,
//   imdb_id: "tt2527336",
//   original_language: "en",
//   original_title: "Star Wars: The Last Jedi",
//   overview:
//     "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
//   popularity: 44.208,
//   poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
//   production_companies: [
//     {
//       id: 1,
//       logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
//       name: "Lucasfilm",
//       origin_country: "US"
//     },
//     {
//       id: 11092,
//       logo_path: null,
//       name: "Ram Bergman Productions",
//       origin_country: "US"
//     },
//     {
//       id: 2,
//       logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
//       name: "Walt Disney Pictures",
//       origin_country: "US"
//     }
//   ],
//   production_countries: [
//     {
//       iso_3166_1: "US",
//       name: "United States of America"
//     }
//   ],
//   release_date: "2017-12-13",
//   revenue: $1,074,251,311.00,
//   runtime: 152,
//   spoken_languages: [
//     {
//       iso_639_1: "en",
//       name: "English"
//     }
//   ],
//   status: "Released",
//   tagline: "Darkness rises... and light to meet it",
//   title: "Star Wars: The Last Jedi",
//   video: false,
//   vote_average: 7,
//   vote_count: 9692
// };

// // const movies = [sample, sample, sample, sample, sample];
// const movies = [sample, sample, sample];

// // const App = () => {
// //   return (
// //     <div className="jumbotron">
// //       <HomePage movies={movies} />
// //     </div>
// //   );
// // };
// const App = () => {
//   return (
//     <div className="jumbotron">
//       <MoviePage movie={sample} />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));