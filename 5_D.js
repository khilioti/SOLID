// Dependency inversion Principle - Верхний уровней модулей не должен зависить от абстракции нижнего уровня

class Fetch {
    request(url) {
        //return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
       // return localStorage.getItem('key')
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }
    clientGet() {
       return this.fetch.request('i.ua')
    }
}

class LocalStorageClient {
    constructor() {
        this.LocalStorage = new LocalStorage()
    }
    clientGet() {
        return this.LocalStorage.get()
    }
}

class Database {
    constructor(client) {
        //this.fetch = new Fetch()
        // this.localStorage = new LocalStorage()
        this.client = client
    }
    getData(key) {
        // return this.fetch.request('i.ua')
        // return this.localStorage.get('i.ua')
        return this.client.clientGet(key)
    }
}

// const db = new Database()
//
// console.log(db.getData())

const db = new Database(new LocalStorageClient())
//const db = new Database(new FetchClient())

console.log(db.getData('rand'))
