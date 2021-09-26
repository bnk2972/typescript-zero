type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type Person = {
    name: string;
    age: number;
}

function get(person: Person, key: keyof Person) {
    return person[key]
}

type Fn = typeof get

// type myGetParams = [person: Person, key: 'name' | 'age']
// type myGetParams = MyParameters<Fn>
type myGetParams = Parameters<Fn>