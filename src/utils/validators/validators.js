export const requiredFuild = value => {
    console.log(value)
    return value ? undefined : "Error: Empty field"
}

export const maxLenght = (maxLenght) => (value) => {

    return value ? value.length > maxLenght ? `Error: Max lenght is ${maxLenght} symbols` : undefined : undefined
}