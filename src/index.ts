type Person = {
    name: string;
    age: number;
    address: string;
}


type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
// type MyNameAndAge = {
//     name: string;
//     age: number;
// }
// type MyNameAndAge = MyPick<Person, 'name' | 'age'>
type MyNameAndAge = Pick<Person, 'name' | 'age'>

// type MyAddress = {
//     address: string;
// }
type MyOmit<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>
// type MyAddress = MyOmit<Person, 'name' | 'age'>
type MyAddress = Omit<Person, 'name' | 'age'>