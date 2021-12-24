class WishlistSubject {

    constructor() {
        this._obsrevers = []
    }

    subscribe(observer) {
        this._obsrevers.push(observer)
    }

    unsubscribe(observer) {
        this._obsrevers = this._obsrevers.filter(obs => obs !== observer)
    }

    fire() {
        this._obsrevers.forEach(oberser => observer.add)
    }
}