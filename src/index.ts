type MyNonNullable<T> = T extends null | undefined ? never : T

//T => number ? number
//T => string ? string
//T => null ? never
//T => null ? never
// type MyNonNull = MyNonNullable<number | string | null | undefined>
type MyNonNull = NonNullable<number | string | null | undefined>
