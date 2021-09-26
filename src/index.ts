type T10 = Uppercase<'hello'>
type T11 = Lowercase<'HELLO'>
type T12 = Capitalize<'hello'>
type T13 = Uncapitalize<'Hello'>

type T20 = Uppercase<'hello' | 'hi'>
type T21 = Lowercase<'HELLO' | 'HI'>
type T22 = Capitalize<'hello' | 'hi'>
type T23 = Uncapitalize<'Hello' | 'Hi'>