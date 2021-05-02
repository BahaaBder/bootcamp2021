// Last Question
const splice = function (arr, x, y) {
    let newArray = []
if(x==0)
{
    for (let j=3;j<arguments.length;j++)
    {
        newArray.push(arguments[j])
    }
    for(let j=x+y;j<arr.length;j++){
        newArray.push(arr[j])
    }
}
else{
    let i=0
    while (i<x){
        newArray.push(arr[i])
        i++
    }
    for (let j=3;j<arguments.length;j++)
    {
        newArray.push(arguments[j])
    }
    for(let j=x+y;j<arr.length;j++){
        newArray.push(arr[j])
    }
}
if(arguments.length==2){
    for(let i=0;i<arguments[i];i++){
        newArray.push(arr[i])
    }
}
return newArray

}
// remove 1 element
// let arr = [1, 2, 3]
// splice(arr, 0, 1);
// console.log(arr); //should be [2,3]

// // add 1 element
// arr = [1,2,3]
// splice(arr, 0,0,0); 
// console.log(arr);    //should be [0,1,2,3]
// console.log(splice(arr, 0,0,0)); //should be [0,1,2,3]

// // add 2 elements
// arr = [1,2,3]
// splice(arr,0,0,-1,0); 
// console.log(splice(arr,0,0,-1,0)); //should be [-1,0,1,2,3]

// // replace 1 element
// arr = [1,2,3]
// splice(arr,1,1,55); 
// console.log(splice(arr,1,1,55)); //should be [1,55,3] 

// // delete all elements from index to end
// arr = [1,2,3,4,5]
// splice(arr,1); 
// console.log(splice(arr,1)); //should be [1] 

// // returns array of deleted elements
// arr = [1,2,3]
// let deleted = splice(arr,1); 
// console.log(deleted); //should be [2,3] 

// // returns an array of the deleted element (1 element)
// arr = [1,2,3]
// deleted = splice(arr,1,1); 
// console.log(deleted); //should be [2] 

// // returns an empty array when no elements are deleted
// arr = [1,2,3]
// deleted = splice(arr,1,0,5); 
// console.log(deleted); //should be [] 