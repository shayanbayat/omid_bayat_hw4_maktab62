function depth(array) {
    let count = 1
    while (array.some(value => typeof value === 'object')) {
        array = array.concat.apply([], array)
        count++
    }
    return count
}
let array = [1,2,[3,4,[5,6],7,[8],10],11,12]
console.log(depth(array))