const num=[1,2,3]

// const total=num.reduce(function(acc,cv){
//     return acc+cv
// },0)

//by array fn.
const total=num.reduce((acc,cv)=> acc+cv,0)
console.log(total)