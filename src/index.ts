type Role = 'Admin' | 'Manager' | 'Employee'
const role: Role = 'Admin'

type Website = {
    url: string;
}

type Article = {
    title: string;
    content: string;
}
//extends ได้มากกว่า 1 interface
type BlogPost = Website & Article & {
    views: number;
}

const post: BlogPost = {
    url: 'www.facebook.com',
    title: 'Developer',
    content: 'My Life',
    views: 200
}