// const roles: 'Admin' | 'Manager' | 'Staff' = 'Admin'
// enum Role {
//     Admin,
//     Manager,
//     Staff
// }

// enum Role {
//     Admin = 'Admin',
//     Manager = 'Manager',
//     Staff = 'Staff'
// }

const enum Role {
    Admin,
    Manager,
    Staff
}

const role: Role = Role.Admin
console.log(role)