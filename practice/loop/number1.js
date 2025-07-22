// write a javascript program that displays the largest integer among two integers.
/*
let fnum= parseInt(prompt("Enter the first number"));
let snum=parseInt(prompt("Enter the second num"));

if (fnum> snum){
    console.log("the largest numbber is : ", fnum);
}else if(fnum<snum){
    console.log("The largest number is :", snum);
}else{ 
    console.log(`${fnum} and ${snum} are equal`);

}

*/




// Write a JavaScript function that determines the larger of two integers using
//  bitwise operators only.

// function getlargerBitwise(a,b){
//     //calculating diff
//     let diff=a-b;

//     //get the sign bit (0 if diff is positive, 1 if negative)
//     let k=(diff>>31)&1;

//     // if k ==0 then a is larger; if k ==1 then b is larger
//     return a-k*diff;
// }

// console.log(getlargerBitwise(10,20));





// Write a JavaScript program that iterates integers from 1 to 100.
//  But for multiples of three print "Fizz" instead of the number and for multiples of 
// five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for (i=1; i<=100; i++){
    if (i%3===0 && i%5===0){
        console.log(i,"is a fizzbuzz");
    }
    else if (i%3===0){
        console.log(i, "is a fizz");
    }
    else if (1%5===0){
        console.log(i,"is a Buzz");
    }
    else{
        console.log("your number is : ", i);
    }
}






