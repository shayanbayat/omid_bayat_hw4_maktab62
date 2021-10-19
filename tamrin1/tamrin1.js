function colorChoice(numberArray, choicesArray){
    let result = []
    let count = 0
    for(let key in choicesArray){
        count = parseInt(key) + 1
        if(key<3){
            console.log(count+numberArray[key]+' choice is '+choicesArray[key])
        }
        else {
            console.log(count+numberArray[3]+' choice is '+choicesArray[key])
        }
    }

}


let o = ['st', 'nd', 'rd', 'th']
let color = ['blue', 'green', 'red', 'aqa', 'black', 'yellow', 'orange']
colorChoice(o, color)


