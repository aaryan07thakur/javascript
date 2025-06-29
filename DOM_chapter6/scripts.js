console.log("Thank You god");
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
let divs=document.querySelectorAll(".box");
let idx=1;
for (div of divs){
    // console.log(div.innerText);
    div.innerText=`new unique value ${idx}`;
    idx++;
}
console.log(div)



















































