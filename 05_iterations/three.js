//for of

const arr=[1,2,3,4,5]

for(const num of arr)
{
    console.log(num);
}


//Maps

const map = new Map()
map.set('In',"India")
map.set('US',"USA")
console.log(map);

for(const [i,value] of map)
{
    console.log(i,"",value);
}