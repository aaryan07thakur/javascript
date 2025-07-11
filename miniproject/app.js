let userScore=0;
let compScore=0;

const choises=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
// const scores=document.querySelector()



const genComChoise=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random() * 3);
    return options[randomIdx];

};


const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game is Draw, Play again";
    msg.style.backgroundColor="black"
    
};


const showWinner=(userwin)=>{
    if(userwin){
        console.log("You win!")
        msg.innerText="You Win!";
        msg.style.backgroundColor="Green";
    }else{
        console.log("you lose")
        msg.innerText="You Lose.";
        msg.style.backgroundColor="red"
    }
}


const playGame=(userchoice)=> {
    console.log("user choice =",userchoice)
    //generate computer choise
    const CompChoise=genComChoise();
    console.log("comp choice=", CompChoise);

    if (userchoice=== CompChoise){
        //draw game
        drawGame()
    }else{
        let userwin=true;
        //user ko choise rock x vane
        if(userchoice=="rock"){
            // sissiors, paper
        // yadi computer ko choise paper x vnae comp lose gar  x and yadi sissiors  x vane win gar x
        userwin= CompChoise==="paper" ? false:true;
        } else if(userchoice=== "paper"){
            //computer ko choise "rock" ya "sessiors" huna sak x 
            userwin=CompChoise==="scissors"? false:true; // ternary statement
        }else{
            //last options user sanga sessiors x so 
            //computer ko choise rock ya paper hun x so
            userwin=CompChoise==="rock"? false: true;
        } 
        showWinner(userwin);
    }
};




choises.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userchoice=choice.getAttribute("id");
       playGame(userchoice);
    //    console.log(userchoice," was clicked");



        
    });

});