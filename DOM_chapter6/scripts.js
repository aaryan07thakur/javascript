// console.log("Thank You god");
// alert(
//     message=" Thank you god"
// )

// console.dir(document.head);
// console.dir(document.body);
// console.dir(document.body.childNodes[1]);


// Id bata access garna ko lagei (document.getElementByid(idname)) use hun x

// let getelement=document.getElementById("heading");
// console.log(getelement);

// let val=document.getElementById("heading2");
// console.dir(val);


// class bata access garna ko lagie (document.getElementByClassName("classname")) use hun x

// let abc=document.getElementsByClassName("heading");
// console.log(abc);



// tag bata access garna ko lagie(documnet.getElementByTagName("p"))
// let para=document.getElementsByTagName("p");
// console.log(para);


// query selector:yes ma hami le id, class,tag sabai pathau n mil x 
// let element=document.querySelector("p")  // this gives first element only 
// console.log(element);
// console.dir(element);

// let element1=document.querySelectorAll("p"); // this returns all elements 
// console.log(element1);

// class use garna ko lagie . lagau nu par x 
// let class1=document.querySelector(".myclass")  // this gives first element only 
// console.log(class1);
// console.dir(class1);

// let class2=document.querySelectorAll(".myclass")  // this return all element in nodelist 
// console.log(class2);
// console.dir(class2);





// id laie queryselector bata access garna ko lagie #idname lekhnu par  x
// let id=document.querySelector("#heading")  // this gives first element only 
// console.log(id);
// // console.dir(id);

// let id2=document.querySelectorAll("#heading")  // this return all  element in nodelist 
// console.log(id2);
// // console.dir(id2);



// console.log(document.body.firstChild);


// let div=document.querySelector("div");
// console.log(div);
// console.log(div.innerText)  // innerText vane ko div vitra ko sabai element


//question solution

// let h2=document.querySelector("h2");
// console.log(h2.innerText);

// h2.innerText=h2.innerText+ " from youtube"// concanitate 
// console.log(h2.innerText);


// let divs=document.querySelectorAll(".box");
// console.log(divs);

// divs[0].innerText="new unique text 0" // changing text
// console.log(divs[0])

// divs[1].innerText="new unique text1" // changing text
// console.log(divs[1])

// divs[2].innerText="new unique text2" // changing text
// console.log(divs[2])




//using loops
// let divs=document.querySelectorAll(".box");
// let idx=1;
// for (div of divs){
//     // console.log(div.innerText);
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }
// console.log(div)



// ==========================================================
// for attributes

// let div=document.querySelector("div");
// console.dir(div);

// let id=div.getAttribute("id"); // div ko attribute access garna ko lagie
// console.log(id);

// let nam=div.getAttribute("name");
// console.log(nam);  // div ko name attriute laei access gar x 




// ==============================================
// let par=document.querySelector("p");
// console.log(par.getAttribute("class")); // p tag ko attibutes access gare ko 


// let para=document.querySelector("p");
// para.setAttribute("name", "Dipesh"); // change the attributes name
// console.log(para.getAttribute("name")); 



//style
// let divs=document.querySelector("div");
// console.log(divs.style);  //div ko style laie access garna mil x
// console.log(divs.style.color="white") // style ko colour or any things can be changed
// console.log(divs.style.background="green")
// console.log(divs.style.fontSize="20px")
// console.log(divs.innerText="Thank you God!")// text change garna mil x 
// console.log(divs.style.textAlign="Center");
// divs.style.visibility="hidden";  // visibility pani hide garna milx







//insert elements
// let btn =document.createElement("button");
// btn.innerText="clickMe !";
// console.log(btn);

// let div=document.querySelector("div");
// div.append(btn);
// div.prepend(btn);
// div.after(btn);
// div.before(btn);

// let p=document.querySelector("p");  // paragraph ko tala add garnu x vnae 
// p.after(btn);
// p.before(btn);



// let newheading=document.createElement("h1");
// // h1.innerText("Thank You God !");
// newheading.innerHTML="<i>Thank YOu God !</i>"


// let h1=document.querySelector("body") //.prepend(newheading) bata pani add garna sakin x
// h1.prepend(newheading);



//delete 

// let para=document.querySelector("p"); 
// para.remove();





// Create a new button element. Give it a text "Clickme", background color of red
// and text color of white.
// Insert the button as the first element inside the body tag

// let newbtn=document.createElement("button");
// newbtn.innerText="Cliek Me!"
// // console.log(btn)
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newbtn);



/* create a <p> tag in html, give it a class& some styling, Now create a new class in css
 and try to append this class to the <p> element. 
 Did you notice,how yo overwrite the class name when you add a new one? solve this problem 
 using classlist */


let para=document.querySelector("p") //.classList
let abc=para.classList.add("newclass");// new class add garna ko lagei 
console.log(abc)
console.log(para);

let rem=para.classList.remove("newclass");// remove garna ko lagie
console.log(rem);

// let val=para.getAttribute("class")  // class ko value print gar x 
// console.log(val);
// let content=para.setAttribute("class","newclass");// class ko value change hun x but text black hun x so 
// console.log(content); 





































