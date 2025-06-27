// for (let i=1; i<=10; i++){
//     console.log("Thank you God")
// }
// console.log("loop has ended")




// calculator sum of 1 to 5
// let sum=0;
// let num=prompt("Enter the number")
// for (let i=1; i<=num; i++){
//     sum=sum+i;
// }
// console.log("The total number of sum is: ",sum)
// console.log("loop has ended")



// while loops

// let i=1;
// while(i<=20){
//     console.log("Thank you God")
//     i++;
// }



//example 2:
// let i=1;
// while(i<=20){
//     console.log("i =",i)
//     i++
// }




// do-while loop
// let i=1;
// do{
//     console.log("Thank you god")
//     i++;
// }while(i<=20);


//example number2
// let i=1;
// do{
//     console.log("i=",i);
//     i++
// }while (i<=19)




// for-of loop
// let str="Thankyou God";
// for (let i of str){
//     console.log("i=",i);
// }




//example of 2
// let str="Thankyou God";
// let length=0
// for (let i of str){
//     console.log("i=",i);
//     length++;
// }
// console.log("string length is =",length)





// for in loops
// let stuudent={
//     name:"Dipesh",
//     class:12,
//     Roll:10,
//     CDPA:3.3,
//     ispass:true,
// };
// for (let i in stuudent){
//     console.log(i);
// }





// let stuudent={
//     name: "Dipesh Thakur",
//     age:28,
//     cgpa:3.8,
//     ispass:true
// };
//     for (let key in stuudent){
//             console.log("Key=",key, "value=",stuudent[key]);
    
//     }
    



// create a game number where you start with any random game number.Ask the user to keep guessign the 
//game number untl the user enters correct value

// let gamenum=33;
// let usernum=prompt("Enter the number");
// while (usernum!=gamenum){
//     usernum=prompt("you guess the wrong number,Guess again")
// }
// console.log("congratulation you guess the correct number, You win the Game!")




//write a for loop that adds all the numbers from 1 to 100 and logs the final sum
/*
let sum=0;
for (i=1; i<=100; i++){
    sum=sum+i;
}
console.log("total sum of number from 1 to 100 is :",sum);

*/


// Count the vowels (for…of)
// Given a string stored in let text = "JavaScript Loop Practice"; 
// use a loop to count how many vowels (a, e, i, o, u, case-insensitive) it contains.
//  Print the count.

// let str="java script loop practice";
// let count=0;
// const vowels="aeiou";
// for(const ch of str.toLowerCase()){  // loop in each character
//     if (vowels.includes(ch)){   // check if its a vowels 
//         count++;
//     }
// }
// console.log(`vowel count: ${count}`)     // template literals
    

// let text="Thank you god for blessign me";
// let count=0;
// const vowels="aeiou";
// for (const ch of text.toLowerCase()){
//     if (vowels.includes(ch)){
//         count++;
//     }
// }
// console.log(`vowel count: ${count}`)





// print vowel letter
// let text="The quick brown fox jumps over the crazy dog";
// let count=0;
// const vowel="aeiou";
// for (const ch of text.toLowerCase()){
//     if (vowel.includes(ch)){
//         count++;
//     }
// }
// console.log(`vower count : ${count}`)


// //only consunant
// let text="The quick brown fox jumps over the crazy dog";
// let count=0;
// const vowels=!"aeiou";
// for (const ch of text.toLowerCase()){
//     //count only alphabet letters that are not vowels
//    if(/[a-z]/.test(ch) && !vowels.include(ch)){
//     count++;
//    }

// }
// console.log(`consunant: ${count}`)


// Multiplication table (nested loops)
// Create a 10 × 10 multiplication table in the console, where each row shows
// 1 × n = n … 10 × n = ?.
// (Hint: an outer loop for the first factor, an inner loop for the second.)


// for (let n=1; n<=10; n++){
//     let row="";


//     for (let m=1; m<=10; m++){
//         row+= `${m}x ${n}=${m * n}`.padEnd(8,"  ");
// }
// console.log(row.trim());
// }



// Reverse and array using a while loop(without reverse())
// const arr=[2,3,4,5,7,8,8,9,0,0,5];
// let start=0;
// let end=arr.length-1;

// while (start<end){
//     let temp =arr[start];
//     arr[start]=arr[end];
//     arr[end]=temp
//     start++
//     end--;

// }
// console.log ("Reversed array :",arr)




// skip multiples of 3 using continue and store other in a new array?
let result=[];
for (let i=1; i<=50; i++){
    if (i%3===0){
        continue;
    }
    result.push(i);
}
console.log("number from 1 to 50 excluding multiples of 3: ");
console.log(result)




 