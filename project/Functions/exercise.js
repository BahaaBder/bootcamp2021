//ex1
const calcAge=function(x,y){
    return x-y
}

const age = calcAge(2017, 1989)
console.log(age)
// ex3
let isEven=function(number){
    if(number%2==0){
        return true
    }
    else 
    {
        return false
    }
}
console.log(isEven(6))

//ex4
let array=[1,2,2,3,4]
const printOddnumbers=function(arr){
    for(let i of arr){
        if(!isEven(i)){
            console.log(i)
        }
    }
}

printOddnumbers(array)
//ex5

