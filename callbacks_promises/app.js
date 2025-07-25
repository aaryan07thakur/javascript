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

function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data", dataId);
      if (getNextData){
        getNextData();
      }  
        
    }, 2000);// 2 sec pachhi data laei print gar x 
}
// 2 2 sec ko gap ma sabai data1,data2,data3 and data4 print gar x 
// this is a callbackhell
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});



























































































































