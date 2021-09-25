function fixed(num: number) {
    return num.toFixed(2)
}

// let a: any = '100'
let a: unknown = 100

if (typeof a === 'number') {
    fixed(a)
}