//Recusive
type ArrayItem<T> = T extends (infer U)[] ? ArrayItem<U> : T

// T => number[][], U => number[]
// T => number[], U => number
// T => number =>
declare function flatten<T extends unknown[]>(arr: T): ArrayItem<T>[]

const x = [
    [1, 2],
    [3, '4']
] // number[][]

const arr = flatten(x)  // typeof arr === number[]
// [1, 2, 3, 4]
// console.log(arr)