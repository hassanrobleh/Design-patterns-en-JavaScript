class SearchForm {

    constructor(movies) {
        this.movies = movies    
        this.isSearchingByActor = false

        this.MovieNameSearch = new MovieNameSearch(Movies)
        this.ActorNameSearch = new ActorNameSearch(Movies)

        this.$wrapper = document.createElement('div')
        this.$searchFormWrapper = document.querySelector('.search-form-wrapper')
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
    }

    search(query) {
        // Décomenter ces lignes de code une fois que votre recherche est fonctionnelle

        /*
        let SearchedMovies = null
        
        if (this.isSearchingByActor) {
            SearchedMovies = this.ActorNameSearch.search(query)
        } else {
            SearchedMovies = this.MovieNameSearch.search(query)
        }
        this.displayMovies(SearchedMovies)
        */
    }
}