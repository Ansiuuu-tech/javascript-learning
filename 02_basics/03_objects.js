// singleton

//  object literals
// Object.create

const JsUser = {
    name: "Anshu",
    age: 18,
    location: "Delhi",
    email:"anshu@gmail.com",
    lastLoginDays:["monday", "saturday"]


}
// console.log(JsUser.email)
// console.log(JsUser["email"])

// JsUser.email="ansiuuu.com"
 Object.freeze(JsUser)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());