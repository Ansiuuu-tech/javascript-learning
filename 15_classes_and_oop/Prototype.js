// // let myName="Anshu     "
// // console.log(myName.truelength);


// let arr=["thor","spiderman","ironman"]


// let obj={
//     thor:"hammer",
//     spiderman:"web",
//     ironman:"suit"


// }
// Object.prototype.anshu=function(){
//     console.log("Anshu is present in all object");

// }
// Array.prototype.athird=function(){
//     console.log("This is a method of array");}
// // arr.anshu();
// // obj.anshu();
// // arr.athird();




//inheritance

const user={
    name:"Anshu",
    email:"anshu@example"
}
const teacher={
    makeVideos:true
}
const teaachingSupport={
    isAvailable:true
}
const taSupport={
    makeAssignment:"Js assignment",
    fullTime:true,
    __proto__: teaachingSupport
}

teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(teaachingSupport,teacher)

let anotherusername="chai aur code     "
String.prototype.truelength=function(){
    console.log(this.trim().length);
}
anotherusername.truelength()

"Anshu".truelength()
"icetaech".truelength()