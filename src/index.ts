type Item = string | number | unknown[]

function isNumber(item: Item): item is number {
    return typeof item === 'number'
}

function truncate(item: Item, lenght: number): Item {
    //number
    if (isNumber(item)) {
        return Math.floor(item / 10 ** (lenght - 1))
    }

    //string || unknow[]
    return item.slice(0, lenght)
}

console.log(truncate('Hello', 3)) //'Hel'
console.log(truncate(12345, 3)) //'123'
console.log(truncate([1, 2, 3, 4, 5], 3)) //[1, 2, 3]