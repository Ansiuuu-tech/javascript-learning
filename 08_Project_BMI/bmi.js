const weight=document.querySelector("#weight");
const height=document.querySelector("#height");
const calculateBtn=document.querySelector("#calculate");
const result=document.querySelector("#result");
calculateBtn.addEventListener("click",()=>{
    const w=parseFloat(weight.value);
    const h=(parseFloat(height.value)/100);  
    if(w>0&&h>0)
    {
        const bmi=(w/(h*h)).toFixed(2);
        result.textContent=`Your BMI is ${bmi}`;
    }
});