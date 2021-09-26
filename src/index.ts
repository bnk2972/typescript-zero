type MyRecord<T extends string | number | symbol, U> = {
    [K in T]: U;
}

// type MyPerson = {
//  name: string;
//  address: string;
// }
// type MyPerson = MyRecord<'name' | 'address', string>
type Person = Record<'name' | 'address', string>