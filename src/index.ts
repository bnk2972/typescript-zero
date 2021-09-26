// T extends U ? X : Y
type NumOrString = string[] | number[] | number | string | undefined

type ArrayFilter<T> = T extends unknown[] ? T : never

// type ArrayOnly = string[] | number[] | never | never | never
type ArrayOnly = ArrayFilter<NumOrString>

const person = {
    name: 'Beer',
    age: 28,
    getName() {
        return this.name
    },
    getAge() {
        return this.age
    }
}

type Person = typeof person

type FunctionPropKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type PersonFunctionKeys = FunctionPropKeys<Person>

// type Age = Person['age']