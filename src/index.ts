// type MyExclude<T, U> = T extends U ? never : T
// type MyAddress = MyExclude<'name' | 'age' | 'address', 'name' | 'age'>
type MyAddress = Exclude<'name' | 'age' | 'address', 'name' | 'age'>

// type MyExtract<T, U> = T extends U ? T : never
// type MyNameAndAge = MyExtract<'name' | 'age' | 'address', 'name' | 'age'>
type MyNameAndAge = Extract<'name' | 'age' | 'address', 'name' | 'age'>