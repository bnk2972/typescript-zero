const num1: readonly number[] = [1, 2, 3]
// num[0] = 2
const num2: ReadonlyArray<number> = [1, 2, 3]

// const num3 = num2 
const num3 = num2 as number[]
num3[0] = 2