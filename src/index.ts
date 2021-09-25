interface Person {
    name: string;
    age: number;
    gender: string;
}

let person: Person;

//หากข้อมูลไม่ครบตาม interface จะเกิด Error
person = {
    name: 'Beer',
    age: 28,
    gender: 'Male'
}