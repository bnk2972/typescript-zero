// const theme = {
//     colors: {
//         amethyst: '#9b59b6' as const,
//         carrot: '#e67e22' as const // const assertions
//     }
// }

const theme = {
    colors: {
        amethyst: '#9b59b6',
        carrot: '#e67e22'
    }
} as const

// theme.colors.carrot = '#eee'
//... 

const carrot = theme.colors.amethyst