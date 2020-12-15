class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.watchlist = [];
    }

    add(movie) {
        this.favoriteMovies.push(movie);
        this.watchlist.push(movie);
    }

    getAll() {
        return this.favoriteMovies;
        return this.watchlist;
    }
}

export default new StubAPI();