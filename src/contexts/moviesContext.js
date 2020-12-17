import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "add-favorite":
            return {
                movies: state.movies.map((m) =>
                    m.id === action.payload.movie.id ? { ...m, favorite: true } : m
                ),
                topRated: state.topRated.map((m) =>
                    m.id === action.payload.movie.id ? { ...m, favorite: false } : m
                ),
                // popular: state.popular.map((m) =>
                //     m.id === action.payload.movie.id ? { ...m, favorite: false } : m
                // ),
                upcoming: [...state.upcoming],
                popular: [...state.popular]
            };
        case "add-watchList":
            return {
                upcoming: state.upcoming.map((m) =>
                    m.id === action.payload.movie.id ? { ...m, watchList: true } : m
                ),
                movies: [...state.movies],
                topRated: [...state.topRated],
                popular: [...state.popular]

            };
        case "load":
            return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated: [...state.topRated], popular: [...state.popular] };
        case "load-upcoming":
            return { upcoming: action.payload.movies, movies: [...state.movies], topRated: [...state.topRated], popular: [...state.popular] };
        case "load-topRated":
            return { topRated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], popular: [...state.popular] };
        case "load-popular":
            return { popular: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], topRated: [...state.topRated] };
          case "add-review":
            return {
                movies: state.movies.map((m) =>
                    m.id === action.payload.movie.id
                        ? { ...m, review: action.payload.review }
                        : m
                ),
                upcoming: [...state.upcoming],
            };
        default:
            return state;
    }
};

const MoviesContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],topRated: [], popular: []});
    // 
    const addToFavorites = (movieId) => {
        const index = state.movies.map((m) => m.id).indexOf(movieId);
        dispatch({ type: "add-favorite", payload: { movie: state.movies[index], topRated: state.movies[index], popular:[]} });
    };

    const addToWatchList = (movieId) => {
        const index = state.upcoming.map((m) => m.id).indexOf(movieId);
        dispatch({ type: "add-watchList", payload: { movie: state.upcoming[index] } });
    };

    const addReview = (movie, review) => {
        dispatch({ type: "add-review", payload: { movie, review } });
    };

    useEffect(() => {
        getMovies().then((movies) => {
            dispatch({ type: "load", payload: { movies } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getUpcomingMovies().then((movies) => {
            dispatch({ type: "load-upcoming", payload: { movies } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getTopRatedMovies().then((movies) => {
            dispatch({ type: "load-topRated", payload: { movies } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
      getPopularMovies().then((movies) => {
          dispatch({ type: "load-popular", payload: { movies } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    

    return (
        <MoviesContext.Provider
            value={{
                movies: state.movies,
                upcoming: state.upcoming,
                topRated: state.topRated,
                popular: state.popular,
                addToFavorites: addToFavorites,
                addToWatchList: addToWatchList,
                addReview: addReview,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;// import React, { useEffect, createContext, useReducer } from "react";
// import { getMovies, getUpcomingMovies, getTopRatedMovies } from "../api/tmdb-api";

// export const MoviesContext = createContext(null);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add-favorite":
//       return {
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id ? { ...m, favorite: true } : m
//         ),
//         topRated: state.topRated.map((m) =>
//           m.id === action.payload.movie.id ? { ...m, favorite: false } : m
//         ),
//         upcoming: [...state.upcoming]
//       }; 
//     case "load":
//       return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated: [...state.topRated]};
//     case "load-upcoming":
//         return { upcoming: action.payload.movies, movies: [...state.movies], topRated: [...state.topRated]};
//     case "load-topRated":
//          return { upcoming: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming] };
          
//     case "add-review":
//       return {
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id
//             ? { ...m, review: action.payload.review }
//             : m
//         ),
//         upcoming: [...state.upcoming],
//       };
//     case "add-watchlist":
//       return {
//         upcoming: state.upcoming.map((m) =>
//           m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
//         ),
//         movies: [...state.movies],
//         opRated: [...state.topRated]
//       };
//     default:
//       return state;
//   }
// };


// const MoviesContextProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],topRated: [] });
 
//   const addToFavorites = (movieId) => {
//     const index = state.movies.map((m) => m.id).indexOf(movieId);
//     dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
//   };

//   const addToWatchList = (movieId) => {
//     const index = state.upcoming.map((m) => m.id).indexOf(movieId);
//     dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
//   };

//   const addReview = (movie, review) => {
//     dispatch({ type: "add-review", payload: { movie, review } });
//   }; 

//   useEffect(() => {
//     getMovies().then((movies) => {
//       dispatch({ type: "load", payload: { movies } });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
  
//   useEffect(() => {
//     getUpcomingMovies().then((movies) => {
//       dispatch({ type: "load-upcoming", payload: { movies } });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   useEffect(() => {
//     getTopRatedMovies().then((movies) => {
//       dispatch({ type: "load-topRated", payload: { movies } });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);



//   return (
//     <MoviesContext.Provider
//       value={{
//         movies: state.movies,
//         upcoming: state.upcoming, 
//         topRated: state.topRated,
//         addToFavorites: addToFavorites,
//         addReview: addReview,
//         addToWatchList: addToWatchList,
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };

// export default MoviesContextProvider;