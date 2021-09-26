//Indexable Types
interface States {
    [ state: string ]: boolean;
    // writeable: number;
}

const states: States = { enabled: true, readable: true, /* writeable: 123 */ }