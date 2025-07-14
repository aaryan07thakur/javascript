// //creating object 
// const student={
//     //properties 
//     fullname:"Dipesh Thakur",
//     marks:95.4,
//     // method pani define garna mil x
//     printMarks: function(){
//         console.log("marks=",this.marks); //this indicate specific object 
    
//     }
    
// };


// let arr=["apple","mango","banana"]
// console.log(arr);
// console.log(typeof arr);//output: object


const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const  abc={
    salary:100000,
    calcTax(){
        console.log("tax is 20%")//yadi kunai pani object r prototype ko method same vayo vnae 
        // object ko method use hun x that is abc kai method use hun x 
    }

};

abc.__proto__=employee;





















// ================================================================================
// class:

// class car{
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
// }

// let fortuner= new car();
// console.log(typeof fortuner);
// console.log(fortuner);

// let lexus=new car();



// ==================================================================
// constructor
class car{
    constructor(brand,milage){// this is a constructor
        console.log("creating a new object");
        this.brand=brand;
        this.milage=milage;

    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}

let fortuner= new car("fortuner", 10); // yesma pani  first ma constructor call hun x and tes pachhi aru print hun x
console.log(typeof fortuner);
console.log(fortuner);

let lexus=new car("lexus", 13);// first ma constructor call hun x
console.log(lexus);







