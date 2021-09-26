type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type Person = {
    name: string;
    age: number;
}

function get(person: Person, key: keyof Person) {
    return person[key]
}

type Fn = typeof get

// type myGetReturnType = MyReturnType<Fn>
type myGetReturnType = ReturnType<Fn>