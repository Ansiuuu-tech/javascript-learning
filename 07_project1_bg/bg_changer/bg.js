const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");
const yellowBtn = document.getElementById("yellow");
const resetBtn = document.getElementById("reset");

redBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});
greenBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor="green";
})
blueBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});
yellowBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
});

resetBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#f4f4f4";
});