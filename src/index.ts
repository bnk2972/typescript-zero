//Overloading เป็นฟีเจอร์ที่สามารถอนุญาตให้ตั้งชื่อฟังก์ชันซ้ำกันได้
//แต่ parameter & return type คือต้องแตกต่างกัน
function addInt(n: number, m: number): number
function addInt(n: string, m: string): string
function addInt(n: unknown, m: unknown): unknown {
    if (typeof n === 'number' && typeof m === 'number') return n + m
    if (typeof n === 'string' && typeof m === 'string') {
        return `${parseInt(n) + parseInt(m)}`
    }

    throw new Error('must be the same type')
}

console.log(addInt(1, 2))
console.log(addInt('3', '4'))
// console.log(addInt(1, '3'))
