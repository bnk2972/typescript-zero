// interface Dict<T> {
//     [key: string]: T
// }

type Dict<T> = {
    [key: string]: T
}


function initialize<T>(keys: string[], value: T): Dict<T> {
    return keys.reduce((result, key) => ({ ...result, [key]: value }), {})
}

const result = initialize(['a', 'b', 'c'], 0)
console.log(result)