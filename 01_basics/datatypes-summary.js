// #primitve datatypes
//7 types: String, Number, Boolean, null, undefined, symbol, bigInt

const score=100

const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmial;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=54484618685;


//refernce types(non primtive)
// Array, Objects, Functions

const heroes=["superman","thor","ironman"];
let myObj = {
    name:"anshu",
    age: 22,
}

const myFunction=function(){
    console.log("Helloworld");
}

console.log(typeof myFunction);


//===============================================

//Stack(primtive), Heap(Non-primitive)
