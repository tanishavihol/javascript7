let marks={
    harry:98,
    rohan:70,
    aakash:7
}
// for(let i=0;i<Object.keys(marks).length;i++){
// console.log("the marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
// }
for(let key in marks){
console.log("the marks of "+key+" are "+marks[key])
}
//problem no 3 
let cn=43
let i 
while(i!=cn){
i=prompt("enter a number")
console.log("try again ")
}
console.log("you have entered a correct number")
