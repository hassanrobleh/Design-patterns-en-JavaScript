class UserConnectedState {

    constructor() {
        this.isConnected = true
        this.user = new User()
    }

    getUser() {
        return new User()
    }

}

class AnonymousUserState {
    constructor() {
        this.isConnected = false
        this.user = new User()
    }

    getUser() {
        return new User()
    }

}