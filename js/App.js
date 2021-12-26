class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.$modalWrapper = document.querySelector('.modal')
        
        this.moviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')

        // FullMovie
        this.FullMovies = []

        // WishList
        this.wishListSubject = new WishlistSubject()
        this.wishListCounter = new WishListCounter()
        this.wishListSubject.subscribe(this.wishListCounter)

        // UserContext
        this.UserContext = new UserContext()
    }

    async fetchMovies() {
        const moviesData = await this.moviesApi.get()
        const externalMoviesData = await this.externalMoviesApi.get()

        const Movies = moviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        this.FullMovies = Movies.concat(ExternalMovies)    
    }

    async main() {
        
        await this.fetchMovies()

        const Form = new FormModal(this.UserContext)
        Form.render()

        const Filter = new FilterForm(this.FullMovies)
        Filter.render()

        const Sorter = new SorterForm(this.FullMovies)
        Sorter.render()

        const Search = new SearchForm(this.FullMovies)
        Search.render()
        
        this.FullMovies.forEach(movie => {
            // const Template = new MovieCard(movie)
            const Template = movieCardWithPlayer(
                new MovieCard(movie, this.wishListSubject)
            )
            // console.log(Template)
            this.$moviesWrapper.appendChild(
                Template.createMovieCard()
            )
        })

        
    }

   
}

const app = new App()
app.main()

