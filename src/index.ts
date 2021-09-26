//Discriminated Unions การแยก union โดยการกำหนดประเภทเพื่อระบุชนิดของ interface ได้อย่างถูกต้อง
interface Triangle {
    type: 'traingle';
    base: number;
    height: number;
}

interface Regtangle {
    type: 'regtangle';
    width: number;
    height: number;
}

interface Circle {
    type: 'circle';
    radius: number;
}

type Shape = Triangle | Regtangle | Circle;

function assetNever(x: never): never {
    throw new Error('Unexpected value. Should have been never.')
}

function area(s: Shape) {
    switch (s.type) {
        case 'circle':
            return Math.PI * s.radius ** 2
        case 'traingle':
            return 0.5 * s.height * s.base
        case 'regtangle':
            return s.width * s.height
        default:
            return assetNever(s)
    }
    //Circle
    // return Math.PI * s.radius ** 2
    //Regtangle
    // return s.width * s.height
    //Other
    // return assetNever(s)
}

area({ width: 20, height: 10, type: 'regtangle' })