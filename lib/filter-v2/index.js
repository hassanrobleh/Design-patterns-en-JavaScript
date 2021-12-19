
class FilterV2 {

    constructor(params) {
        
    }

    async filterByActor(Movies, actor) {
        await new Promise(resolve => setTimeout(resolve ,200))

        if(!actor) {
            return Movies
        }

        return Movies.filter(movie => Movie.actor === actor) 
    }
}