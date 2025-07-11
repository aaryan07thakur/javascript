let userScore=0;
let compScore=0;

const choises=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorespara=document.querySelector("#user-score");
const compsocrepara=document.querySelector("#comp-score")



const genComChoise=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random() * 3);
    return options[randomIdx];

};


const drawGame=()=>{
    msg.innerText="Game is Draw, Play again";
    msg.style.backgroundColor="black"
    
};


const showWinner=(userwin,userchoice,CompChoise)=>{
    if(userwin){
        userScore++;
        userscorespara.innerText=userScore;
        msg.innerText=`You Win! your ${userchoice} beats my ${CompChoise} `;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compsocrepara.innerText=compScore;
        msg.innerText=`You Lose.my ${CompChoise} beats  your ${userchoice}`;
        msg.style.backgroundColor="red"
    }
}


const playGame=(userchoice)=> {
    // console.log("user choice =",userchoice)
    //generate computer choise
    const CompChoise=genComChoise();
    // console.log("comp choice=", CompChoise);

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
        showWinner(userwin,CompChoise,userchoice);
    }
};




choises.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userchoice=choice.getAttribute("id");
       playGame(userchoice);
    //    console.log(userchoice," was clicked");



        
    });

});