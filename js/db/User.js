
class User {

    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get user() {
        return {
            firstName: this._firstName,
            lastName: this._lastName
        }
    }
}