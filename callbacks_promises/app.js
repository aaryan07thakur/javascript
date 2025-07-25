// function hello(){
//     console.log("hello");

// }
// // 4 sec pachhi print hun x 
// setTimeout(hello, 4000) // timeout 4mls


// console.log("one");
// console.log("two");
// setTimeout(()=>{ // arrow funciton
//     console.log("Hello");

// },2000); // time out
// console.log("Three");
// console.log("four");


// ========================================================================
// calback function

// function sum(a,b){
//     console.log(a+b)
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);

// }
// // calculator(1,2,sum);
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

// ==============================================================
// callback Hell

// function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId);
        
//     }, 2000);// 2 sec pachhi data laei print gar x 
// }


// ======================================================
// next example

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//       if (getNextData){
//         getNextData();
//       }  
        
//     }, 2000);// 2 sec pachhi data laei print gar x 
// }
// 2 2 sec ko gap ma sabai data1,data2,data3 and data4 print gar x 
// this is a callbackhell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });




// =====================================================================================================
// Promises
// let promise=new Promise((resolve, reject)=>{
//     console.log("I am a promice");
//     // resolve("Success");
//     reject("some error");
// });


// let promise=getData(123);
// function getData(dataid,getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data: ", dataid);
//             resolve("Success");
//             console.log(promise);
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });

//     }


// function fakeApiCall() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         resolve(" Data received from server");
//       } else {
//         reject(" Failed to fetch data");
//       }
//     }, 2000); // 2 second wait
//   });
// }

// fakeApiCall()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("API call finished"));


// ===============================================================================
// chaning promises

function asyncfun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000);
    });
}

function asyncfun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },6000);
    });
}
// promise chaining
console.log("fetching data1..............");
let p1=asyncfun();
p1.then((res)=>{
    console.log("result:",res);
    console.log("fetching data2......");
    let p2=asyncfun2();
    p2.then((res)=>{
        console.log("result:",res);

    });
});




























































































































