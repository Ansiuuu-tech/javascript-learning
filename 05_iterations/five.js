// const coding = ["js","ruby","pyt","cpp"]

// coding.forEach( function (item){
//     console.log(item);
// } )

const arr=[
    {
        languageName: "java",
        languageFileName:"j"
    },
     {
        languageName: "cpp",
        languageFileName:"c"
    }, 
    {
        languageName: "python",
        languageFileName:"pyt"
    },
]
arr.forEach((item) => {
    console.log(item.languageName);
})