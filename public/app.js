"use strict";
//TS doesn't know what is going to be in our HTML file
//here TS knoows what type of tag we r grabbing
// const anchor = document.querySelector('a')!;   //! to tell TS this won't return null
// console.log(anchor.href);
// if (anchor){
//     console.log((anchor))
// }
//but with class name TS doesn't know exactly what type  bcz class can be used with any HTML element
//so use type casting
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
