//for
// for(let i=0;i<10;i++)
// {
//     const element=i;
//     if(element==5){
//     console.log(i);
// }
//     }
//     for(let i=1;i<=10;i++)
//     {
//         console.log(`Outer loop value: ${i}`);
//         for(let j=1;j<=10;j++)
//         {
// //console.log(`Inner loop value: ${j}`);
//      console.log(i+'*'+j+'='+ i*j) 
// }

//     }


let arr=["flash","batman","sperman"]

for(let i=0;i<arr.length;i++){
    const element=arr[i];
    console.log(element);
}

//break and continue

for(let i=1;i<=20;i++)
{     if(i==5)
{
    console.log("detected 5");
    break;
}
    console.log("value of i is"+i);
}



for(let i=1;i<=20;i++)
{     if(i==5)
{
    console.log("detected 5");
    continue;
}
    console.log("value of i is"+i);
}