// เง่ือนไข Generic 
// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
// แบบนี้จะไม่เหมาะสม
function merge(obj1: object, obj2: object) {
    return { ...obj1, ...obj2 }
}

const result = merge({ name: 'beer' }, { age: 28 })
console.log(result)