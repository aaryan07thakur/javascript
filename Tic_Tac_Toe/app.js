let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");

let turnO=true;//playerX, PlayerO


const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

// every box ma eventlistener add garne
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        //yadi turno True x vane "o" print hun x ani truno=false hunx else yadi turno 
        // false x vane "X" print hun x and turno=true hun x
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        //box disabled vaya n vane double click garda value change hun x so 
        box.disabled=true;

        checkwinner();

    });

});

const disabledBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }

}



const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }

}

const checkwinner=()=>{
    for (let pattern of winning_pattern){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //  );
        let posi1val=boxes[pattern[0]].innerText;
        let posi2val=boxes[pattern[1]].innerText;
        let posi3val=boxes[pattern[2]].innerText; 
        
        if (posi1val!="" && posi2val!="" && posi3val!=""){
            if (posi1val=== posi2val && posi2val===posi3val){
                alert(`winner is=${posi1val}`)
                disabledBoxes();

    
            }

        }
    }

};



const resetGame=()=>{
    turnO=true;
    enableBoxes();  
}



























































