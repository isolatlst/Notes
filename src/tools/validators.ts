export const validateTitle = (value: number | string) => {
    if (!value) return 'Please, enter title'
    if (value.toString().length > 25) return 'Title is toooo long'
    return false
}
export const validateText = (value: number | string) => {
    if (!value) return 'Please, enter text'
    return false
}
export const validateTags = (value: string, values: Array<string | number>) => {
    if (!!value && value[0] !== '#') return 'Enter # before the tag'
    if (!value[1] && value[0] === '#') return 'Enter some tag'
    if (value[1] === ' ') return 'Delete spaces'
    for (let i = 0; i < values.length; i++) {
        if (value === values[i]) return 'Tag already exist'
    }
    if (!value && values.length) return false
    return false
}