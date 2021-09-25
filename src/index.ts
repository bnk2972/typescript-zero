function uppercaseFirstLetter(str: null | string | undefined) {
    if (typeof str === 'string' && str.length) {
        return str[0].toUpperCase()
    }
    return ''
}

uppercaseFirstLetter('Beer')
uppercaseFirstLetter(null) //Compile Error
uppercaseFirstLetter('')