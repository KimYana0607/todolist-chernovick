const array = [1,2,3,4,5,6]
array.push(7)

const next = new Array(1,2,3,4,5)
const object = new Object()
// Data, Promise, Map, Set, Boolean, String

const str = 'abc'
const strNext = String('abc')
console.log(str)
console.log(str.split())


class Pet {
    // создание экземпляра класса Pet (instanse of Pet)
    constructor (name,type,voice) {
        this.name = name
        this.type = type
        this.voice = voice
    }
//     Установка методов экземпляров класса в Pet.prototype:
    greeting() {
        console.log(`Hello, ${this.type}!. My name is ${this.name}`);
    }
}


const cat = new Pet('Motya', 'Cat', 'Meow')

// cat.greeting()
// catNext.greeting()

console.log(cat)
console.log(Pet.prototype)



const result = array.find(n => n % 2 === 0)
console.log(result)



Array.prototype.muFind = function (callback) {
    for (let i = 0, i < this.length, i++){
        if (callback(this[i]) === true) {
            return this[i]
        }
    }
    return undefined
}

Array.prototype.muFilter = function (callback) {
    const = filteredArray = []
    for (let i = 0, i < this.length, i++){
        if (callback(this[i]) === true) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

console.log(array.myFilter(n => n % 2 === 0))

Array.prototype.myMap = function (callback) {
    const mappedArray = []
    for (let i = 0, i < this.length, i++){
        const result = callback(this[i])
        mappedArray.push(result)
    }
    return mappedArray
}

const res = array.myMap(n => Math.pow(n, 2))
console.log(array.__proto__ === Array.prototype);

array.myMap(n => Math.pow(n, 2))
// const aaa = array.__proto__.myMap.call(res, n => Math.pow(n, 2))
// console.log(aaa)
const boundMyMap = array.__proto__.myMap.bind(res)
// apply, bind

console.log(boundMyMap(res))

function args (a,b,c,d){
    // const argumtnts = [a,b,c,d]
    const arrFromArguments = [...arguments]
    console.log(arguments)
//     Псевдомассив(цикл да, методы нет)
}

args(1,2,3,4,5)