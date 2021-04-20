let p1={
    name: "bahaa",
    age:23,
    city:"Kafr Qassim"
}
let p2={
    name: "ali",
    age:29,
    city:"Kafr Qassim"
}
if(p1.age==p2.age){

}
if(p1.city==p2.city){
    console.log("Jill wanted to date Robert")
}
else {
    console.log("Jill wanted to date Robert, but couldn’t")
}

////////////////////////////////////////////////////////////////////////////
let car={
    type:"swed",
    maxSpeed:"300"
}
let car2={
    type:"skoda",
    maxSpeed:"677"
}
let myList =[car,car2]
car["type"]="mazda"
myList.splice(1,1)

let array2=[car,car2]
myList .push(...array2) // adda array to another
console.log(myList)
///////////////////////////////////////////////////////////////////////////

let library={
    books:[{title:"C#",author:"KOKO"},{title:"C++",author:"KO"},{title:"python",author:"Lolo"}]
}
myList.push(library.books)
console.log(...myList)
///////////////////////////////////
let x = [ {human: {name: 'Daena', age: 31} } ][0].age
