// //creating object 
// const student={
//     //properties 
//     fullname:"Dipesh Thakur",
//     marks:95.4,
//     // method pani define garna mil x
//     printMarks: function(){
//         console.log("marks=",this.marks); //this indicate specific object 

// const { use } = require("react");

    
//     }
    
// };


// let arr=["apple","mango","banana"]
// console.log(arr);
// console.log(typeof arr);//output: object


// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const  abc={
//     salary:100000,
//     calcTax(){
//         console.log("tax is 20%")//yadi kunai pani object r prototype ko method same vayo vnae 
//         // object ko method use hun x that is abc kai method use hun x 
//     }

// };

// abc.__proto__=employee;





















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
// class car{
//     constructor(brand,milage){// this is a constructor
//         console.log("creating a new object");
//         this.brand=brand;
//         this.milage=milage;

//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
// }

// let fortuner= new car("fortuner", 10); // yesma pani  first ma constructor call hun x and tes pachhi aru print hun x
// console.log(typeof fortuner);
// console.log(fortuner);

// let lexus=new car("lexus", 13);// first ma constructor call hun x
// console.log(lexus);


// ==========================================================================================
// Inheritance in js

// class parents{
//     hello(){
//         console.log("hello")
//     }
// }

// class child extends parents{}
// let object=new child();
// console.log(object.hello);


// class person{
//     constructor(){
//         this.species="homo sapiens"
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("sleeping is necessary");

//     }
// }

// class humanbeing extends person{
//     work(){
//         console.log("Nam jap")
//     }
// }

// let Dipeshobj=new humanbeing();
// console.log(Dipeshobj);
// let abcd= new humanbeing();
// console.log(abcd);
// console.log(Dipeshobj.sleep)


// ============================================================
// super Keyword


// class person{
//     constructor(){
//         console.log("Enter parent constructor")
//         this.species="homo sapiens"
//     }
//     eat(){
//         console.log("Eat");
//     }
// }

// class humanbeing extends person{
//     constructor(address){
//         console.log("Enter child constructor")
//         super();  // to incoke parent class constructor
//         this.address=address;
//         console.log("Exit child constructor")
//     }


// }

// let Dipeshobj=new humanbeing("Kalopull");



// ========================================================================
//Question

// you are creating a website for your college. Create a class User 
// with 2 properties, name & email. It also has a method called viewData() that 
// allows user to view website Data

// let DATA="Secret information";
// //creating class 
// class User{
//     constructor(name, email){
//     this.name=name;
//     this.email=email;
//     }

//     // this is a method 
//     ViewData(){
//         console.log("data=",DATA);
//     }
// }

// let student1=new User("Dipesh","dipesh@gmail.com");
// console.log(student1);
// let student2=new User("bb","bb@gmail.com");
// console.log(student2);


// ==================================================

// question2 : create a new class Admin which inherits from User. 
// Add a new method called editData to Admin that allows it to edit website data.


// let DATA="Secret information";
// //creating class 
// class User{
//     constructor(name, email){
//     this.name=name;
//     this.email=email;
//     }

//     // this is a method 
//     ViewData(){
//         console.log("data=",DATA);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="some new value"
//     }
// }

// let student1=new User("Dipesh","dipesh@gmail.com");
// console.log(student1);
// let student2=new User("bb","bb@gmail.com");
// console.log(student2);

// let admin =new Admin("admin","admin@gmail.com")
// console.log(admin);
// console.log(admin.ViewData)

// console.log(admin.editData)// admin le data laie edit garna pau x 

// ================================================================
// class Shape{
//     name;
//     sides;
//     sideLength;

//     constructor(name,sideLength,sides){
//         this.name=name;
//         this.sides=sides;
//         this.sideLength=sideLength;
//     }

//     calcperimeter(){
//         console.log(
//             `The ${this.name}'s perimeter length is ${this.sides*this.sideLength}.`,
//         );
//     }
    
// }


// const square=new Shape("square",4,5);
// square.calcperimeter();

// const triangle=new Shape("triangle",3,3);
// triangle.calcperimeter();



// ==========================================================================================

// class square1 extends Shape{
//     constructor(sideLength){
//     super("square",4,sideLength)
//     }
//     calcarea(){
//         console.log(
//             `The ${this.name}'s area is ${this.sideLength* this.sideLength}.`,
//         );
//     }

// }
// const area= new square1(4);
// area.calcperimeter();
// area.calcarea();

// ===============================================================================
// Write a JavaScript program to create a class called "Person" with properties for name,
//  age and country. Include a method to display the person's details. Create two instances 
//  of the 'Person' class and display their details.

// class person{
//     constructor(name,age, country){
//         this.name=name;
//         this.age=age;
//         this.country=country;
//     }

//     displayDetail(){
//         console.log(`Name:${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Country: ${this.country}`);

//     }
// }


// //creating instance of the person class
// const person1=new person('Dipesh',27,"Nepal");
// console.log("Person1 Details:");
// person1.displayDetail();

// const person2=new person("Mukesh",25,"Nepal");
// console.log("person2 Details: ");
// person2.displayDetail();  //// display details of person


// ===========================================================================================
// Write a JavaScript program to create a class called 'Rectangle' with properties for
//  width and height. Include two methods to calculate rectangle area and perimeter.
//   Create an instance of the 'Rectangle' class and calculate its area and perimeter.



class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    calcArea(){
        console.log(
            `The Area of Rectangle is: ${this.width*this.height}`
        )
    }
    calcperimeter(){
        console.log(
            `The Perimeter of Rectangle is: ${2*(this.width*this.height)}`
        )
    }
}
// create an instance of the rectangle class
const rectangle=new Rectangle(2,4);

//calculate area and perimeter of rectangle
const area=rectangle.calcArea();
const perimeter=rectangle.calcperimeter();





























































































