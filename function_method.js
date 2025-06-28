// function myfunction(){
//     console.log("Thank you god")
//     console.log ("Thankyou god, i am learning js")
// }
// myfunction();


// function sum(x,y){
//     console.log(x+y);
// }
// sum(50,10);



// function sum(x,y){
//     s=x+y;
//     console.log()
//     console.log("before return")
//     return s;
//     console.log("after return");
// }
// let val=sum(3,4);
// console.log(val)




// arrow functions:
// normal function laie compact tarika le lekhne function ho .
//it is a modern in js and it alsway should be store in a variable

// const arrowsum=(a,b)=>{
//     console.log(a+b);
// }
// arrowsum(5,6)



// const arrowmul=(a,b)=>{
//     console.log(a*b);
// }
// arrowmul(5,4)


// let arrowmul=(a,b)=>{
//     return a*b;
// }
// console.log(arrowmul(4,5));


// const printhello=()=>{
//     console.log("Hello");
    
// }
// printhello()





// practice questions

//create a function using the "function" keyword that takes a string as an argument & 
// return the number of vowels in the string.
// ============================================================================================
/*
function countsvowels(str){
    let count=0;
for(let char of str){
    if(char==="a"|| 
        char==="e" || 
        char==="i"|| 
        char==="o"|| 
        char==="u"){
        count++;
    }
    console.log(char);
    
}
console.log("total vowels letter are= ",count);
return count;
}
countsvowels("Thank you god for blessing Me")
*/
// ======================================================================================================




//using arrow function 
/*
let countvolwe=(str)=>{
    let count=0
    for( let ch of str){
        if (ch==="a"||
            ch==="e"||
            ch==="i"||
            ch==="o"||
            ch==="u"
        ){
            count++;
        }
        
    }
    console.log("The total number of vowels are = ",count)
}
countvolwe("Thank you god for blessing me!");

*/







//another method

/*
let vowels1="aeiou";
let count1=0;
function check(str){
    for(let ch of str.toLowerCase()){
        if (vowels1.includes(ch)){
            count1++;
        }
    }
    console.log("Total number of vowels are =", count1);
    

}
// check("Thank you god for blessing Me");
check("A quick Brown Fox jumps over the crezy dog");

*/



//Check consunant only

/*
let vowels="aeiou";
let count=0;
function check_consunant(str){
    for(let ch of str.toLowerCase()){
        if (vowels.indexOf(ch) === -1 && /[a-z]/.test(ch)){
            count++;
        }

    }
    console.log("total number of consunant are= ",count);

    // return count;

 }
check_consunant("A quick Brown Fox jumps over the crezy dog")

*/



































































