//My cheatsheet Notes 
// Getting started with Js Basic 

//string
const name ='Kezia';
//Number
const age = 55;
// number , JS has no floats 
const  rating =5;
// Boolean Value 
const issmart= true;
//a null
const x= null;
// undefined 
const y =undefined;
//intializing undefined value
let z;

console.log( typeof name);
console.log( typeof age);
console.log( typeof rating);
console.log( typeof issmart );
console.log( typeof x );
console.log( typeof y );
console.log( typeof z );
// concantenation
console.log("my name is "+ name + " and I'm "+ age  + " years old ");
//Best method use backticks 
const hello= (`My name id ${name} and I am ${age} years old `)
console.log(hello)
// find the length
console.log(hello.length)
//using method always use ()
console.log(hello.toUpperCase())//toLowercase etc....
// Creating an array using split
const l = 'Apple, Samsung, Tesla, Oppo'
console.log(l.split(', '))
/*creating Using a constructor ("new")
*/
const array1 = new Array (1,2,3,4,5,6,7)
console.log(array1)
//Commonly used [] instead of 'new'
const array2 =['1','banana','Mango' , true , null]
console.log(array2)
/* Note that in JS an array is not restricted to one data type 
*/
// Adding to the end of the arry use push 
array2.push ('Apple')
console.log(array2)
//Adding at the front 
array2.unshift('Apple')
console.log(array2)
console.log(Array.isArray(array2))
//getting the index of a value 
console.log(array2.indexOf('Apple'))

// Object literal ...(More like a dictionary)
const Programmer= { 
    firstName:"Kezia",
    lastName: 'Wahome',
    School:'MIT',
    Hobby: ['Coding', 'Music' , 'Writing'],
    Adress:{
        Country:'Kenya', 
        Box: "45 Igwamiti"
    }
    }
console.log(Programmer)
console.log(Programmer.Hobby.indexOf(' Music'))
console.log(Programmer.Hobby[1])
console.log(Programmer.lastName)
console.log(Programmer.Adress.Country)
// Assigning varibles by pulling them out of the object literal
// This is  called deconstructing 
const { firstName , lastName , Adress :{Box}}= Programmer 
console.log(Box)
//Adding properties
Programmer.email="kezia.waho@gmail.com"
console.log(Programmer)

//Arrays of objects example [{},{},..]
const todos=[
    { id :1,
    Text :'Learn JavaScript Basics',
   state:true},

    {id :2,
        Text :'Practice Java Inheritance ',
     state:true},

    { id :3,
        Text :'Work on DSA hash Maps',
     state:false}
]
// To print out properties
console.log(todos)
// To print out a spefic property
console.log(todos[2].Text)
/* Coverting the object literals into a JSON
format so as to send them into the server */
//Note , JSON uses "" not ''
// Below is the method 
 const todosJSON = JSON.stringify(todos)
 console.log(todosJSON)

 // Loops in JavaScript
 /*for (initialization;condition;final-expression){
   Block of code
}
*/
  for (let i= 0 ; i< 10; i++) 
  {console.log(  `I am less than 10 ${i} ` )}
  // Looping through Array *important 
  //There are many methods 
  // one using for loop
   for ( i =0 ; i<todos.length; i++ )
   {console.log(todos[i])}
// To desplay text only 
for ( i =2 ; i<todos.length; i++ )
   {console.log(todos[i].Text)}
   // Note that array items are accesed from the last to 
   //index 0 !! interesting Data Structure and Algorithms  concept
   
// For...of loop 
/*for (variable of iterable) {
  Block of code 
}*/

for ( let todo of todos)
{console.log(`By using for...of ${todo.id}`); }

// High order loop , for iteration 
// ForEach() iterate through a array, Map() create a new array, filter 
// Example of forEach
todos.forEach(function(todo)
{console.log( `this is by using forEach ${todo.Text}`);})
// Example for map *uses return 
//Note the difference between map and forEach syntax** 
// also while and dowhile syntax **
const todoid =todos.map(function(todo){
    return todo.id
})
console.log(todoid)
 //the loop return the id of the arrays as specified by using todos.id 

 // using filter 
 const todoprogress = todos.filter(function(todo){
     return todo.Status === false;
 })
console.log(todoprogress)
// If conditions 
const k = 10 ;
if (k === 10)
{console.log("This condition passes")
}
else 
{console.log("This doesn't meet the condition")}
// using or /and instead of nesting conditions
 const j = 11

 if (k > 10|| j > 10)
{console.log("This condition passes")
}
else 
{console.log("This doesn't meet the condition")}
// using &&
if (k > 10&& j > 10)
{console.log("This condition passes")
}
else 
{console.log("This doesn't meet the condition")}
// Using ternarlly operater 
// used to set variables based on conditions  
const m = 10
const color = m > 10 ? 'red' : "blue " ;
console.log(color)
// ? means then the ternally operatot 
// : reps else 

// using switches 

const task = "undone " 
switch(task) {
    case "done" :
        console.log("the task is done ")
        break;
    case "undone":
        console.log("the task is undone")
        break;
    case "On going":
        console.log("The task is in progress")
        break;
    default:
        console.log("The task is not started!")
        break;
    }
    
// functions 
function addNums(num1 , num2){
   return num1 + num2
}
// calling the functions and assigning Values to the variables 
console.log(addNums(4,5))
// using arrow funtions
// we don't use the word function but used const 
const  addition =( num1 , num2)=> console.log(num1 + num2)

addition(5,5)
// There different methods of writing this practice!!
// using one variable 
const  addNums2 =( num1)=> num1 + 6
console.log(addNums2(6))
// for forEach with arrow functions 

todos.forEach((todo) => console.log(todo))

//OBJECT ORIENTED PROGRAMMING 
//use contructor to create objects 
//create a contrutor funtion uding object literals bacis 
// I will a 
function Car(Model , Driver , Speed , Bought){
    this.Model =Model
    this.Driver = Driver
    this.Speed = Speed 
    this.Bought = new Date (Bought) 
    this.getName = function(){
        return `${this.Driver}`
    }
}
// instantiate object 
const car1 = new Car('Benz','kezia','limited' ,'2308')
console.log(car1.getName())
 // I can also use class which is easier since I don't have to deal with prototype
 class Car1  {
     constructor( Model , Driver , Speed , Bought){
    this.Model =Model
    this.Driver = Driver
    this.Speed = Speed 
    this.Bought = new Date (Bought) 
     }
 getName(){ return this.Driver}
 }
 console.log(car1.getName())










 

















