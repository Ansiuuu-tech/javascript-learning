const descripter=Object.getOwnPropertyDescriptor(Math,'PI') // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false})
console.log(descripter)

// console.log(Math.PI) // 3.141592653589793


const anshu={
    name:'Anshu',
    age:19,
    city: 'Delhi',

    orderChai : function(){
        console.log('Chai order ho gya')
    }
}
console.log(anshu) // { name: 'Anshu', age: 19, city: 'Delhi' }
console.log(Object.getOwnPropertyDescriptor(anshu,'name')) // { value: 'Anshu', writable: true, enumerable: true, configurable: true }

Object.defineProperty(anshu,'name',{
    writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(anshu,'name'))

for(let [key,value] of Object.entries(anshu))
{
    if(typeof value !== 'function')
    console.log(key,value)
}