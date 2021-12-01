

import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplates.js';
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'


// let docOne:HasFormatter 
// let docTwo:HasFormatter

// //we can assign object of classes into these variables as the classes themselves involve HasFormatter

// docOne = new Invoice('yoshi','web work',250)
// docTwo = new Payment('mario','plumbing work',200)

// //these objects from diff classes
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)


// const invOne = new Invoice('mario','work on mario website',250);
// const invTwo = new Invoice('luigi','work on luigi website',350);

// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)


// invoices.forEach(inv => {
//     console.log(inv.client,inv.amount,inv.format())
// })


const form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    
    let values:[string,string,number] = [tofrom.value,details.value,amount.valueAsNumber]

    let doc:HasFormatter
    if (type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    list.render(doc,type.value,'end')
})



//tuples

//the type of element at a particular index is fixed
//this is diff from arrays
let  tup:[string,number,boolean] = ['ryu',25,true]
// tup[0] = true  (invalid)
tup[1] = 10  //valid