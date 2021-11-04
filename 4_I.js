// Interface segregation Principle - классы которые наследуются от базового класса,
//   если они не содержат методов базового класса то не должны от них зависить

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     walck() {
//         console.log(`${this.name} умеет ходить`)
//     }
//     swim() {
//         console.log(`${this.name} умеет плавать`)
//     }
//     fly() {
//         console.log(`${this.name} умеет летать`)
//     }
// }
//
// class Dog extends Animal{
//     fly() {
//         return null
//     }
// }
// class Eagle extends Animal{
//     swim() {
//         return null
//     }
// }
// class Whale extends Animal{
//     fly() {
//         return null
//     }
//     walck() {
//         return null
//     }
// }
//
// const dog = new Dog('Рекс')
// dog.walck()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Граф')
// eagle.fly()
// eagle.swim()
// eagle.walck()
//
// const whale = new Whale('Большой Синий Друг')
// whale.fly()
// whale.swim()
// whale.walck()

class Animal {
    constructor(name) {
        this.name = name
    }
}

const walker = {
    walck() {
        console.log(`${this.name} умеет ходить`)
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} умеет летать`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Рекс')
dog.walck()
dog.swim()

const eagle = new Eagle('Граф')
eagle.fly()
eagle.walck()

const whale = new Whale('Большой Синий Друг')
whale.swim()