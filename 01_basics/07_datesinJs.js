//dates
let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let myCreatedDate=new Date(2025, 0, 23)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate=new Date(2025,7,6,12,45)
let myCreatedDate=new Date("01-26-2025")
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);

//`${newDate.getDay()} and the time`
newDate.toLocaleString('default', {
    weekday: "long"
    
})