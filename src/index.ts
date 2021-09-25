const str = 'Beer' // String Literal Type
const num = 100 // Number Literal Type
const nickname: 'Beer' | 'Nick' = 'Beer'

console.log(nickname)

function permission(role: 'Admin' | 'Manager') {
    return role
}
console.log(permission('Admin'))