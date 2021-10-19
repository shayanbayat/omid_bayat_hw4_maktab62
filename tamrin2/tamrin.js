let str = prompt("str")
if(str === str.split("").reverse().join("")){
    console.log('is equal')
}
else {
    console.log('not equal')
}