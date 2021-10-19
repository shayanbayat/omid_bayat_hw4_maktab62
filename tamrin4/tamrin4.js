function wideArray(array) {
    while (array.some(value => typeof value === 'object')) {
        array = array.concat.apply([], array)
    }
    return array
}
let array = [1,2,[3,4,[5,6],7,[8],10],11,12]
console.log(wideArray(array))