// write a javascript program that displays the largest integer among two integers.

let fnum= parseInt(prompt("Enter the first number"));
let snum=parseInt(prompt("Enter the second num"));

if (fnum> snum){
    console.log("the largest numbber is : ", fnum);
}else if(fnum<snum){
    console.log("The largest number is :", snum);
}else{ 
    console.log(`${fnum} and ${snum} are equal`);

}