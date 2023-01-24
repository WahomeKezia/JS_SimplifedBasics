//selectors in  Js
 //single elements selectors 
 document.getElementById('my-form') 
 //when we console it it gets selected 
 console.log( document.getElementById('my-form') )
 // the selector items can aslo be assigned variables 

const form = document.getElementById('my-form') 
console .log(form)
// using querySelector 
console.log( document.querySelector ('.container') ) 
console.log( document.querySelector ('h1') ) 
 
 // Multiple selectors 
 console.log( document.querySelectorAll('h1') )

 const items = document.querySelectorAll('.item')
 items.forEach ((item)  => console.log(item)) 

 //Manupulating DOm
 const ul = document.querySelector ('.items')
 //this removes the list 
 //ul.remove()
// ul.lastElementChild.remove()
//ul.firstElementChild.textContent='Hello'

ul.children[1].innerText='Kezia'
ul.lastElementChild.innerHTML= "<h2>I have made progress </h2>"
// Changing sytles from JS
 const btn = document.querySelector('.btn')
 btn.style.background = 'red' 

 //Events 
 //(event ), (function which uses an event paramenter ie 'e' and then an arrow function  )
 btn.addEventListener('click', (e) =>{
     e.preventDefault()
    console.log('click')
      
})
//event object 'mouse out /over etc.

