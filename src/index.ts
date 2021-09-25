interface Person {
    firstName: string,
    lastName: string,
    // Optional Props
    middleName?: string,
    // ReadOnly
    readonly gender: 'Male' | 'Female'
}

let beer: Person = {
    firstName: 'Nattapadtanasak',
    lastName: 'Kongpetsak',
    gender: 'Male'
}

// beer.gender = 'Female' 