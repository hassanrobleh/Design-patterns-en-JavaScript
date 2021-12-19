
class ExternalMovie {
    constructor(data) {
        this._title_fr = data.title_fr
        this._title_en = data.title_en
        this._synopsis = data.synopsis
        this._medias = data.medias
        this._infos = data.infos
    }

    get duration() {
        // const hours = Math.floor(this._duration / 60)
        // const minutes = this._duration % 60
        return `${this._infos.duration}`
    }

    get picture() {
        return `/assets/${this._medias.picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._medias.picture}`
    }

    get released_in() {
        return this._infos.released_in
    }

    // get title_fr() {
        // return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en']
    //     return this._title_fr
    // }

    get title() {
        return this._title_fr ? this._title_fr : this._title_en
    }
    
    get synopsis() {
        return this._synopsis
    }

    // get media() {
    //     return this._media.hasOwnProperty('picture') ? this._media['picture'] : this._media['thumbnail']
    // }

    // get infos() {
    //     return this._infos.hasOwnProperty('duration') ? this._infos['duration'] : this._infos['released_in']
    // }

    
}