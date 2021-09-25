interface Person {
    name: string;
    age: number;
    gender: string;
}

//Excess Property Checks #1
// const person = {
//     name: 'Beer',
//     age: 28,
//     gender: 'Male',
//     job: 'Developer'
// }

// const beer: Person = person

// const person: Person = {
//     name: 'Beer',
//     age: 28,
//     gender: 'Male',
//     job: 'Developer'
// }

interface Regtangle {
    width: number;
    height: number;
}

function getArea(shape: Regtangle) {
    return shape.width * shape.height
}

//Excess Property Checks #2
// const shape = { width: 10, height: 20, depth: 10 }
// getArea(shape)

// getArea({ width: 10, height: 20, depth: 10 })

// const shape: Regtangle = { width: 10, height: 20, depth: 10 }
// getArea(shape)