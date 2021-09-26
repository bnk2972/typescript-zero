// const beer = {
//     name: 'Nattapadtanasak',
//     age: 28,
//     printDetail() {
//         console.log('name: ', this.name, 'age: ', this.age)
//     }
// }

// const maree = {
//     name: 'Maree',
//     age: 25,
//     printDetail() {
//         console.log('name: ', this.name, 'age: ', this.age)
//     }
// }

class Person {
    static University = 'Kasetsart'
    name: string;
    age: number;

    constructor(name: string, age: number) { // ผู้สร้าง
        this.name = name
        this.age = age
    }

    printDetail() {
        console.log('name: ', this.name, 'age: ', this.age, Person.University)
    }
}

const beer = new Person('Beer', 28)
console.log(beer)
const malee = new Person('Melee', 25)
console.log(malee)
malee.printDetail()
