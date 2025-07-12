let count=0;

const countDisplay=document.getElementById("count");
const incrementBtn=document.getElementById("increment-btn");
const decrementBtn=document.getElementById("decrement-btn");

incrementBtn.addEventListener("click",()=>{
    count++;
    countDisplay.textContent=count;
});

decrementBtn.addEventListener("click",()=>{
    count--;
    countDisplay.textContent=count;
});

