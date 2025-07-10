let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");

let turnO=true;//playerX, PlayerO
let count=0;


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
            // box ma va ko inner text laie classlist bata player-o vanne class ma add gareko  
            box.classList.add("player-O");
            turnO=false;
        }else{
            box.innerText="X";
            // box ma va ko inner text laie classlist bata player-X vanne class ma add gareko  
            box.classList.add("player-X");
            turnO=true;
        }
        //box disabled vaya n vane double click garda value change hun x so 
        box.disabled=true;// box laie disable gare ko
        count++; 

        let iswinner=checkwinner();
        if(!iswinner && count===9){
            showDraw();
        }

    });

});

const disabledBoxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }

};


const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("player-O","player-X");

    }

};

// winner checking logic:
const checkwinner=()=>{
    for (let pattern of winning_pattern){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //  );
        // box ko position ma k valeu x tyo print gar x :
        let posi1val=boxes[pattern[0]].innerText;
        let posi2val=boxes[pattern[1]].innerText;
        let posi3val=boxes[pattern[2]].innerText; 
        
        if (posi1val!="" && posi2val!="" && posi3val!=""){
            if (posi1val=== posi2val && posi2val===posi3val){
                showAlert(`winner is=${posi1val}`);
                resetGame();
                enableBoxes();
                
                // disabledBoxes(); //winner vaie sake pachhi feri double 
                                  // click garna n pauna ko lagie disable gage ko box laie
                return true;
    
            }

        }

    }
    return false; // no winner found yet
};

const showAlert=(msg)=>{
    alert(msg); 
};


const showDraw =()=>{
    showAlert("It's a Draw!");
    disabledBoxes(); // disable all boxes on a draw
    resetGame();
};

function resetGame(){
    boxes.forEach(box=>(box.innerText=""));
    turnO=true;
    count=0;
    enableBoxes();
     }
    resetbtn.addEventListener("click",()=>{
    resetGame();
    console.log("Every this is reset succesfully ")
});



























































