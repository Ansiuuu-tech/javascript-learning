function sayMyName()
{


console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("U");

}

//sayMyName()

// function add(number1, number2){
//     console.log(number1 + number2);
// }

// function add(number1, number2){
//     let result = number1 + number2;
//     return result
// }

// const result = add(3,5)
// console.log("Result: ",result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username")
    return
}
    return `${username} just Logged in`
    }

//console.log(loginUserMessage("Anshu"));
//console.log(loginUserMessage("Anshu"));

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 410 ,600,2000))

const user = {
    username: "Anshu",
    price: 199
}
 function handleObject(anyObject){
     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
 }

 //handleObject(user)
 handleObject({
    username: "sam",
    price:199
 })

 const newArray = [200,400,500]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(newArray));