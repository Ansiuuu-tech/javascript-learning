 const num=[1,2,3,4,5,6,7,8,9,10]
// const newnum=num.filter((num)=>num>4)
// console.log(newnum)
newNums=[]
num.forEach((num)=>
{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)