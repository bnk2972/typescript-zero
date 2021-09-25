function checkVoid() {}
checkVoid()

function formatDiscount(disAmt: number | string) {
    switch (typeof disAmt) {
        case 'number':
            return disAmt.toFixed(2)
        case 'string':
            return Number(disAmt).toFixed(2)
        default: 
            return disAmt
    }
}