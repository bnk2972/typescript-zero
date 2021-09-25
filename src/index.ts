// type Printable = string | string[]

// const text: Printable = 'my message'

// function format(thing: Printable): string {
//     if (Array.isArray(thing)) return thing.join(', ')
//     return thing
// }

// format(['Hello', 'Hi'])
// format('hi')

interface Human {
    name: string;
    talk: () => void;
}

interface Cat {
    name: string;
    walk: () => void;
    meow: () => void;
}

const person: Human | Cat = {
    name: 'Beer',
    talk() {
        console.log('Hello')
    },
    meow() {
        console.log('Meow')
    }
}

// person.