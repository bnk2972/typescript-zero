type verticalAlignment = 'top' | 'middle' | 'bottom'
type horizontalAlignment = 'left' | 'center' | 'right'

// type Aligment =
//     | 'top-left'
//     | 'top-center'
//     | 'top-right'
//     | 'middle-center'
//     | 'middle-left'
//     | 'middle-right'
//     | 'bottom-center'
//     | 'bottom-left'
//     | 'bottom-right'

type Aligment = `${verticalAlignment}-${horizontalAlignment}`

function alignBox(alignment: Aligment) {

}

alignBox('middle-left')