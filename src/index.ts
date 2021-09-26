//Keyof
interface Person {
    name: string;
    age: number;
    address: string;
}

// type PersonKeys = 'name' | 'age' | 'address'
type PersonKeys = keyof Person
// type PersonAgeType = number
type PersonAgeType = Person['age']
// type PersonValue = string | number
// type PersonValue = Person['name' | 'age' | 'address']
type PersonValue = Person[keyof Person]

const person: Person = {
    name: 'beer',
    age: 28,
    address: 'NK'
}

function printValuePerson(key: keyof Person): void {
    console.log(person[key])
}

printValuePerson('name')