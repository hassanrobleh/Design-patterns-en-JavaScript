class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.oldMoviesApi = new MovieApi('/data/old-movie-data.json')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
    }

    // ici, je transforme mon tableau de données en un tableau de classe movie
    // Movies.map(movie => new Movie(movie))

    async main() {
        // Ici je récupère mes films de mon fichier old-movie-data.json
        const oldMoviesData = await this.oldMoviesApi.getMovies()
        const newMoviesData = await this.newMoviesApi.getMovies()

        const oldMovies =  oldMoviesData.map(movie => new MoviesFactory(movie, 'oldApi'))
        const newMovies =  newMoviesData.map(movie => new MoviesFactory(movie, 'newApi'))

        const FullMovies = oldMovies.concat(newMovies)

        FullMovies.forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })    
    }
}

const app = new App()
app.main()
