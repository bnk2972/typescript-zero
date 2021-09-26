type Unpacked<T> = T extends (infer R)[] ? R : T
// type StringAndNumberUnpacked = string
type StringAndNumberUnpacked = Unpacked<string[] | number[]>

// Unpacked<string> => string
// Unpacked<number[]> => number

type Swapped<T> = T extends [infer R, infer S] ? [S, R] : never
// [number, string]
type StringNumberSwapped = Swapped<[string, number]>