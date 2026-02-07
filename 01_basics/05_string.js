const name="anshu"
const repoCount=50
//console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Anshu-bc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));

console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newString1="    anshu    "
console.log(newString1.trim());


const url="https://meet.google.com/ansiuuu%20gaur"
console.log(url.replace('%20','-'));
console.log(url.includes('ans'));
console.log(gameName.split('-'));