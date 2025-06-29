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

//using arrow function:
/*
let vowels="aeiou";
let count=0;
let check_consunant=(str)=>{
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




// For each loop: array ko every element ko laigie khe kam garau nu x vane use hun x 

// let arr=[1,2,3,4,5,6];
// arr.forEach(function printval(val){
//     console.log(val);
     
// });


//arrow function
// let arry=[1,2,3,4,5,6,7,8]
// let arry=["dipesh","sushil","mukesh"]  // index and arry itself pani mil x parameter print gar x 
// arry.forEach((val,idx,arry)=>{
//     console.log(val)
//     console.log(val.toUpperCase(), idx,arry)  ///upper case ma print gar x 
// });





// for a given array of numbers, Print the square of each value using the forEach loop.

// let aarr_num=[2,3,4,5,6]
// aarr_num.forEach((aarr_num)=>{
//     // console.log(aarr_num*aarr_num);
//     console.log(aarr_num**2);   // using exponantional operator
// });


// next method
// let num=[4,5,6,7,8]
// let calculatesqr=(num)=>{
//     console.log(num**2);
// }
// num.forEach(calculatesqr)





// map method:

// let num=[4,5,6,7,8]
// num.map((val)=>{
//     console.log(val);
//     console.log(val**2);
    
// });


// let newarr=num.map((val)=>{
//     // return val;
//     return val**2;
// });
// console.log(newarr)






// filter method

// let abc =[1,2,3,4,5,6,7,8,9,22,33,44,55,66,75,44,23,];
// let even_arr=abc.filter((val)=>{
//     // return val%2===0;
//     return val>3;  // larger than 3 

// })
// console.log("the even numbber is=",even_arr)




//reduce method

// let arr=[2,3,4,5,6,7]
// const output=arr.reduce((prev, curr)=>{
//     // return prev>curr? prev:curr   // largest number laie return gar x
//     return prev<curr? prev:curr // small number return gara x


// });
// console.log(output);


// we are given array of marks of students.Filter out of the marks of students that scored 90+.
// let marks=[77,55,88,99,91,98,76,90]

// let final=marks.filter((val)=>{
//     return val>=90;

// });
// console.log("The marks of student that scores 90+ are =", final );



// Take a number n as input from user. create and array of number from 1 to n.
// user the reduce method to calculate sum of all numers in the Array.
// use the reduce method to calculate product of all numbers in the array.


// let num=prompt("Enter the number: ")
// let arr=[];
// for (let i=1; i<=num; i++){
//     arr[i-1]=i;

// }
//     console.log(arr)
//     let sum=arr.reduce((prev,curr)=>{
//         return prev +curr;

//     })
//     console.log("The total sum of array is =",sum);


//     let factorial=arr.reduce((prev,curr)=>{
//         return prev *curr;

//     })
//     console.log("The total factorial of array is =",factorial);




















































