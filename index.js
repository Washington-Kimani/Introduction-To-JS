// let name = "Washington";  //String

// let age = 23 //Integer

// let hobbies = ['coding', 'singing',] //Array

// let Person = {
//     //Attributes
//     name: "Washington",
//     age: 23,


//     //Anonymous
//     sayHello(){
//         console.log("Hello everyone");
//     }
// }

//FUNCTION CREATION

// 1. //anonymous function
function sayHello(){
    console.log('Hello Everyone')
}

let greet = function (){
    console.log('Hello Everyone')
}


//function calling
sayHello()
greet()

// 2. Arrow functions
let sayName = () => {
    console.log('Washington');
}

//function calling
sayName()