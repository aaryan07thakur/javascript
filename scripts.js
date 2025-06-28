//comments
//single line comments
// console.log("Hello world!");


/* this is 
multi-line 
comments*/



//Arithmetic operators
// let a=5;
// let b=2;
// // let c=a+b;
// // let d=a-b;
// // let e=a*b;
// console.log("a*b=",a*b)
// console.log("a-b=",a-b)
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a%b=",a%b);
// console.log("a**b",a**b)



//uranary operator
// let a=5;
// let b=2;
// a++;
// b++;
// a=a-1
// or
//  a--;
// console.log("a=",a)
// console.log("b=",b)



//asingment operator
// console.log("a**=",a**=2)
// console.log("b++=",b+=2)
// console.log("b--=",b-=2)
// console.log("b%=",b%=2)







//comparson operator
// let a="5";
// let b=5;

// console.log("a==b=",a==b)
// console.log("a==b=",a===b)






//logical operators
// let a=4;
// let b=6;
// console.log("cond1 && cond2=",a>b && a===6);    




//or operatore (||)
// let a=4;
// let b=6;
// console.log("cond1 || cond2=",a>b || a===6);   // the output is false


//logical NOt (!)

// let a=4;
// let b=5;
// console.log("!(4<5=",!(a<b));
// console.log("!(4<5=",!(a>b));
// console.log("b>a=",!(b>a));





//conditional statement
// let age=25;
// if (age>18){
//     console.log("you can vote, because your age is gretter than 18")
// }

// let mode="light"
// let color;
// if(mode==="dark"){
//     color="black"
//     console.log("color= ", color)
// }
// if (mode==="light"){
//     color="white"
//     console.log("color = ", color)
// }






// if-else statement:


// let mode="light"
// if(mode==="dark"){
//     color="black"
// } else {
//     color="white"
// }
// console.log("color= ", color)

//exaple 2:
// let age=17;
// if (age>=18){
//     console.log("you can vote")
// } else{
//     console.log("you cannot vote, your age must be gretter than 18")
// }



//Example3:
// let num=41
// if(num%2===0){
//     console.log(num, "Number is Even");
// }else {
//     console.log(num, "Number is odd");
// }



// else if statement
// let mode="pink";
// if (mode==="dark"){
//     color="black";
// } else if (mode==="blue"){
//     color="blue";
// } else if (mode==="Red"){
//     color="Red"
// } else {
//     color= "white";
// }
// console.log("Color is =",color)






//Ternary operator:
/**Ternary operator  is a simpler and compact of if-else 
 if else lekhne ne arko tarika 
 */
// let age=2;
// // age>=18? console.log("adult"): console.log("Not adult")
// let result = age>=18 ? "adult":"not adult"
// console.log(result)



// // promt : user ko input lina ko lagie use hun x
// let name=prompt("Hello");
// console.log(name);






// Get user to input a number using  promt("Enter a number: "). Check if the number is a multiple of 5 or 
//not.

// let num=prompt("Enter a number");
// if (num%5===0){
//     console.log(num,"is a multiple of 5")

// } else{
//     console.log(num,"is not a multiple of 5")
// }




/* write a code wchich can give grades to students according to their scores:
80-100,A
70-89,B
60-69,C
50-59,D
0-49,F
*/
/*
let marks=prompt("Enter your marks(0-100")
if (marks>=90 && marks<=100){
    console.log("your marks is:",marks,"and your Grade is A")
}else if (marks>=70 && marks<=89){
    console.log("your marks is:",marks,"and your Grade is B ")
}else if (marks>=60 && marks<=69){
    console.log("your marks is:",marks,"and your Grade is c ")
}else if (marks>=50 && marks<=59){
    console.log("your marks is:",marks,"and your Grade is D ")
}else if (marks>=0 && marks<=49){
    console.log("your marks is:",marks,"and your Grade is F ")
}

*/


/*
Write a function that compares two numbers and logs:
"Number A is greater"
"Number B is greater"
"Both are equal"
Use if...else if...else.
*/

// let A=prompt("Enter your number for A");
// let B= prompt("Enter your number for B");
// if (A>B){
//     console.log("A is greater")
// } else if (B>A){
//     console.log("B is greater")
// }else {
//     console.log("Both are Equal")
// }





/**   Write a program that checks:

If a number is divisible by both 3 and 5 → print "FizzBuzz"
If only by 3 → print "Fizz"
If only by 5 → print "Buzz"
Else → print the number */

// let num=prompt("Enter your number")
// if (num%3==0 && num%5===0){
//     console.log("this is a FizzBuzz")
// } else if (num%3==0){
//     console.log("This is Fizz")
// } else if (num%5==0){
//     console.log("This is Buzz")
// }else{
//     console.log("Number is :",num)
// }


// let user=prompt("ENter a single Character:");
// //user.length==1 ensures only one character is entered 
// // /^[a-zA-Z]$/: Regex to check if it’s a letter.
// if(user.length===1 && /^[a-zA-Z]$/.test(user)){
//     let char=user.toLowerCase();
//     if (["a","i","e","o","u"].includes(char)){
//         console.log(user,"is a Vowel Letter");
//     }else{
//         console.log(user," is a consonant letter");
//     }
// } else{
//     console.log(user,"is not an alphabet");
// }





































