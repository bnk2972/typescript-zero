//Key Remapping
type Person = {
    name: string;
    age: number;
}

// type PersonSubscribers = {
//     nameChanged: (key: "name", value: string) => void;
//     ageChanged: (key: "age", value: number) => void;
// }

type PersonSubscribers = {
    [K in keyof Person as `${K}Changed`]: (key: K, value: Person[K]) => void;
}