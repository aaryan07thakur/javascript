let count=0;
let inccounts=0;
let deccounts=0;

const countDisplay=document.getElementById("count");
const incrementBtn=document.getElementById("increment-btn");
const decrementBtn=document.getElementById("decrement-btn");
const incDisplay=document.getElementById("inc-count");
const decDisplay=document.getElementById("dec-count");


const inccount=incrementBtn.addEventListener("click",()=>{
    count++;
    inccounts++;
    incDisplay.textContent=inccounts;
    countDisplay.textContent=count;
});

const deccount=decrementBtn.addEventListener("click",()=>{
    count--;
    deccounts++;
    decDisplay.textContent=deccounts;
    countDisplay.textContent=count;
});

function update(){
    count.textContent=count;
    inccount=textContent=incrementBtn;
    deccount=textContent=decrementBtn;
}

