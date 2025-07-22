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

function getlargerBitwise(a,b){
    //calculating diff
    let diff=a-b;

    //get the sign bit (0 if diff is positive, 1 if negative)
    let k=(diff>>31)&1;

    // if k ==0 then a is larger; if k ==1 then b is larger
    return a-k*diff;
}

console.log(getlargerBitwise(10,20));





