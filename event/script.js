// let btn=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("button was clicked");
//     let a=30;
//     a++;
//     console.log(a);
// }


//mouseover event
// let divs=document.querySelector("div");{
//     divs.onmouseover=()=>{  //onmouseover vane ko mouse ko cursor jati xoti lagyo div vitra 
//                               //teti nai xoti trak gar x 
//         console.log("You are inside div")
//     }

// }





// envent object : it is a sepcial object that has details about the envent.
//



//envent object


// let btn=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{// e is a object which gives details about the event
//     console.log(evt);
//     console.log(evt.type);  // e ko type 
//     console.log(evt.target); // event ko target k ho vane r print garna mil x
//     console.log(evt.clientX, evt.clientY);

//     console.log("button was clicked");
//     let a=30;
//     a++;
//     console.log(a);
// }




// mouseevent object
// let divs=document.querySelector("div");{
//     divs.onmouseover=(e)=>{  //onmouseover vane ko mouse ko cursor jati xoti lagyo div vitra 
//                               //teti nai xoti trak gar x 
//         console.log(e);
//         console.log(e.type);
//         console.log(e.target);
//         console.log(e.clientX, e.clientY)

//         console.log("You are inside div")
//     }

// }


// let abc=document.querySelector("#btn1");
// abc.addEventListener("click",(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log("Button was clicked");
// });
// abc.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler2");
// });
 


// removeEnventListener
// let abc=document.querySelector("#btn1");
// abc.addEventListener("click",(e)=>{
//     console.log("Button was clicked");
// });
// const handler2=()=>{
//     console.log("Button was clicked-handler2");
// };
// abc.addEventListener("click",handler2);
// abc.removeEventListener("click",handler2) // handler2 remove vayo 



// questions
// create a toggle button that chandges the screen to dark-mode when clicked 
// and light-mode when clicked again


let modbtn=document.querySelector("#class");
let currmode="light";
modbtn.addEventListener("click",()=>{
    // console.log("you are trying to change the mode");
    if (currmode==="light"){
    currmode="dark";
    document.querySelector("body").style.backgroundColor="Black";
    } else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log("your current mode is =",currmode);

});




//next method of above questions
// question answer
// let modbtn=document.querySelector("#class");
// let currmode="light";
// let body=document.querySelector("body");
// modbtn.addEventListener("click",()=>{
//     // console.log("you are trying to change the mode");
//     if (currmode==="light"){
//         currmode="dark";
//         body.classList.add("class")
//         body.classList.remove("newclass")
//     } else{
//         currmode="light";
//         body.classList.add("newclass");
//         body.classList.remove("class");
//     }
//     console.log("your current mode is =",currmode);

// });




//<!-- hover solution -->
// let divs=document.querySelector("div");{
//     divs.onmouseover=()=>{  //onmouseover vane ko mouse ko cursor jati xoti lagyo div vitra 
//                               //teti nai xoti trak gar x 
//         console.log("You are inside div")
//     }

// }


//mouseover

// let divabc=document.querySelector(".dark");
// let currmode="light";
// let body=document.querySelector("body");
// divabc.addEventListener("mouseover",()=>{
//     console.log("you are trying to change the mode");
//     if (currmode==="light"){
//         currmode="dark";
//         body.classList.add("dark")
//         body.classList.remove("light")
//     } else{
//         currmode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log("your current mode is =",currmode);
// });












































