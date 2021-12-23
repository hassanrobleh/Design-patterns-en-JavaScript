class ProxyRatingSorter {
    constructor() {
        // super()
        this.cache = []
    }

    async sorter(movies, orderBy) {
        const cachedResult = this.cache.find(elt => elt.key === orderBy)
        if (cachedResult) {
            console.log('get from cache')

            return cachedResult
        } else {

            
            const data = await RatingSorterApi.sorter(movies, orderBy)
            
            this.cache.push(data)
            return data
        }
    }


}