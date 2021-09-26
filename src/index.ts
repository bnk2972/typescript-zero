//Intersection Types
interface Indentity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
    address: string;
}

type Employee = Indentity & Contact

const beer: Employee = {
    id: 11001,
    name: 'beer',
    email: 'beer@livingmobile.me',
    phone: '064-643-2333',
    address: 'Nakhonsawan'
}