//Mapped Types
interface Course {
    title: string;
    credit: number;
}

// type CourseReadOnly = {
//     readonly title: string;
//     readonly credit: number;
// }

type CourseReadOnly = {
    readonly [K in keyof Course]: Course[K]
}

// ทำทุกส่วนให้เป็น Readonly 
// type CourseReadOnlyWithSemaster = {
//     readonly title: string;
//     readonly credit: number;
//     semaster: string;
// }

// type CourseReadOnlyWithSemaster = CourseReadOnly & { semaster: string }
type CourseReadOnlyWithSemaster = { 
    readonly [K in keyof Course]: Course[K];
} & { semaster: string }

// type CourseOptional = {
//     title?: string;
//     credit?: number;
// }

type CourseOptional = {
    [K in keyof Course]?: Course[K]
}

// ลบ Optional
// type CourseReadOnlyRequired = {
//     readonly title: string;
//     readonly credit: number;
// }

type CourseReadOnlyRequired = {
    readonly [K in keyof CourseOptional]-?: CourseOptional[K]
}