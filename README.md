# wad2-moviesApp
The development of a SPA for Movie enthusiasts.
The features of the React app will include:
Display a list of current movie releases. For each one show its poster image, title, release date and viewer rating.
Display more detailed information on a movie from the above list by clicking its poster. The details include plot, runtime, spoken languages, production companies, etc.
Show extracts from written reviews for a movie.
Show the full review text for a review.
Add movies to your favorites list.
Write a review for one of your favorites.
Home page - List the first 20 movies returned by the TMDB API:
Favourite page - Displays movies added to favourites from home page.
Upcoming page- Lists all upcoming movies returned by the TMDB API and add it to your watchlist:
//Assignment addition
Watchlist page- Lists all the movies youve added to your watch list
Top rated page- Lists all the movies in order of rating (highest to lowest)
Popular movie-Lists all popular movies returned by the TMDB API
Similar Movies- Lists the similar movies belonging to a particular movie, links formed using keywords and genres.
Recommended movies - lists all recomended movies for a movie. 








# Assignment 1 - ReactJS app.

Name: Nikki Osita 

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
+ Watchlist page- Lists all the movies youve added to your watch list
+ Top rated page- Lists all the movies in order of rating (highest to lowest)
+ Popular movie-Lists all popular movies returned by the TMDB API
+ Similar Movies- Lists the similar movies belonging to a particular movie, links formed using keywords and genres.
+ Recommended movies - lists all recomended movies for a movie. 
+ Click Login to log in


## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........
after downloading add personal .env file
"npm install" in command line.
"npm start" in command line

## API Data Model.

..... List the additional TMDB endpoints used in your assignment

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/top_rated- get the top rated movies
+ https://api.themoviedb.org/3/movie/${id}/recommendations - get a list of recommended movies for a movie
+ https://api.themoviedb.org/3/movie/${id}/similar- get a list of similar movies
+ https://api.themoviedb.org/3/movie/popular - get a list of the current popular movies


### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........


![][watchListLink]
images for README\login.png
images for README\first three showing.png
images for README\first three gone.png
\images for README\watchlist add a review button.png
\images for README\review form.png
> Clicking watckList in the header causes log in page to appear, log in must be clicked before watchlist page appears.
> Watchlist page displays the movies stored in watch list array that was added to upcoming.
> When movie cards in watchList displays an add review button is also an option (good for cases where its a rewatch).
> Any movie added to watchList before login will be stored and displayed after log in.

![][topRatedcardLink]
images for README\toprated.png
> Clicking a "toprated" movies in header causes the display of the top rated movies.

![][similarMoviesLink]
images for README\show similar and review.png
images for README\show similar.png
>Clicking the 'Show Similar Movies' button displays the similar movies linked to the movies.
>Clicking the ' Hide Similar Movies' button hides the similar movies linked to the movies from display.

![][recommendedMoviesLink]
images for README\show similar and review.png
images for README\show recommendation.png
>Clicking the ' Show Recommended Movies' button displays the recommended movies linked to the movies.
>Clicking the ' Hide Recommended Movies' button hides the recommended movies linked to the movies from display.

![][PopulatedcardLink]
images for README\popular movies.png
> Clicking a card causes the display of that movie's details.

![][LoginLink]
images for README\login.png
> Click log in to have access to favourites and watchlist
## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (private) - displays the user's favorite movies selection.
+ /reviews/:id - displays the full text of a movie review.
+ + /movies/watchList (private) - displays movie the user watchList group.
+ /movies/topRate  -displays top Rated movie
+ /movies/popular - displays popular movies
+ /similarMovies/:id  - displays the cards that are similar movies.
+ /recommendedMovies/:id - displays the cards that are recommended movies.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.


![][watchListLink]
images for README\watchlist(hyperlink).png
> Clicking "watckList" in the header causes the display of the  movies stored in watch list array.

![][topRatedcardLink]
images for README\toprated(hyperlink).png
> Clicking "toprated" movies in header causes the display of the top rated movies.

![][similarMoviesLink]
images for README\show similar(hyperlink).png
>Clicking the 'Similar Movies' card displays the similar movies linked to the movies.

![][recommendedMoviesLink]
images for README\show recommendation(hyperlink).png
>Clicking the ' Show Recommended Movies' card displays the recommended movies linked to the movies.

![][PopulatedcardLink]
images for README\popular movies(hyperlink).png
> Clicking a card causes the display of that movie's details.

![][LoginLink]
images for README\login.png
> Click log in to have access to favourites and watchlist
## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png

[watchListLink]: images for README\login.png
                 images for README\first three showing.png
                 images for README\first three gone.png
                 images for README\watchlist add a review button.png
                 images for README\review form.png 

[topRatedcardLink]: images for README\toprated.png

[similarMoviesLink]: images for README\show similar and review.png
                     images for README\show similar.png

[recommendedMoviesLink]: images for README\show similar and review.png
                         images for README\show recommendation.png
[PopulatedcardLink]: images for README\popular movies.png

[LoginLink]: images for README\login.png

