// creating array
// let marks=[1,2,3,4,5,66,77]
// let info=["dipesh thakur",88,"kathmandu"]

// console.log(marks)
// console.log(Array.isArray(marks))
// console.log(marks.length)
// console.log(info)
// console.log(Array.isArray(info))




// looping over array
//for loop
// let names=["dipesh", "rupesh","ram","mukehs","sunaj"]
// for (let i=0; i<names.length; i++){   //names ko length samma loop run hun x and names print gar x
//     console.log(names[i]);

// }


//for of loop
//  let names=["dipesh", "rupesh","ram","mukehsh","sujan","aaryan"]
//  for (let el of names){   // for of loop le names ko every element ma loop run hun x ani print gar x 
//     console.log(el);
//  }


//example 2:
// let names=["dipesh", "rupesh","ram","mukehsh","sujan","aaryan"]
//  for (let el of names){
//     console.log(el.toUpperCase());   // uper case ma convert gare r print gar x 
//  }

//practice questions
/* for a given array with marks of students [85,97,44,37,79,60] 
find the average marks of the entire class. */

// let marks=[85,97,44,37,76,60] 
// let sum=0;

// for (let avg of marks){
//     sum+=avg/marks.length
// }
// // console.log("total average marks is ", sum);
// console.log(`Average marks of class is = ${sum}`)






/* For a given array with prices of 5 items [250,645,300,900,50]
All items have an offer of 10% OFF on them. Change the array to store final price 
after applying offer  */


// let items=[250,645,300,900,50];
// let idx=0;
// for (let val of items){
//     // console.log(`value of index ${idx}=${val}`);
//     let offer=val/10;
//     items[idx]=items[idx]- offer;
//     console.log(`value after offer= ${items[idx]}`)
//     idx++
    
// }


//using for loop
// for(let i=0; i<items.length; i++){
//     let offer=items[i]/10;
//     items[i]-=offer
//     // console.log(`price after offer = ${items[i]}`)
// }
// console.log(`price after offer = ${items}`)


//push method
// let name=["dipesh","bikesh","chandan"]
// console.log(name.push("Mukesh"))
// // console.log(name.toString())// to string le new string return gar  x

// // console.log(name.pop(""))
// // console.log(name)

// // console.log(name.slice(1,3))

// console.log(name.slice(1))




// splice method
// let item=[1,2,3,4,5,6,7,8,9,0,11]
// // item.splice(2,2,77,33)
// // console.log(item.splice(2,2,88,22))
// // console.log(item.splice(2,0,55,88))   //add element
// console.log(item.splice(2,2))  // delete element
// console.log(item.splice(3,1,66))  //replace element

// console.log(item)




/* Create an array to store companies "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
a) Remove the first company from the array
b) remove uber and add ola in its place 
c) add amazon at the end
*/

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// remove=companies.shift()
// console.log(`removed company = ${remove}`)
// console.log(companies)

//add element
// add=companies.splice(2,1,"Ola")
// console.log(`add element is = ${companies[2]}`)
// console.log(companies)

//adding amazon at the end
// console.log(companies.push("Amazon"))
// console.log(companies)


//concat: concat means to join (combine) two or more strings or arrays together.


// let name=["dipesh","mukehs"]
// let name2=["mummy"]
// let name3=name.concat(name2)
// console.log(name3);

























