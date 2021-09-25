// function getFullName(firstName: string, lastName: string) {
//     return `${firstName} ${lastName}`
// }

// const getFullName = function(firstName: string, lastName: string): string {
//     return `${firstName} ${lastName}`
// }

type getFullNameFn = (firstName: string, lastName: string) => string

const getFullName: getFullNameFn = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}