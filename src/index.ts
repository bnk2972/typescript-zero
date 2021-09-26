// type Person = {
//     name?: string;
//     age?: number;
//     address?: string;
// }

// Required
// type MyRequirePerson = {
//     name: string;
//     age: number;
//     address: string;
// }

// type MyRequired<T> = {
//     [K in keyof T]-?: T[K]
// }
// type MyRequiredPerson = MyRequired<Person>
// type MyRequiredPerson = Required<Person>

// type Person = {
//     name?: string;
//     age?: number;
//     address?: string;
// }

// type MyPartial<T> = {
//     [K in keyof T]?: T[K]
// }

// type MyPartialPerson = MyPartial<Person>
// type MyPartialPerson = Partial<Person>

type Person = {
    name: string;
    age: number;
    address: string;
}

// type Person = {
//     readonly name: string;
//     readonly age: number;
//     readonly address: string;
// }

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

// type MyReadOnlyPerson = MyReadonly<Person>
type MyReadOnlyPerson = Readonly<Person>