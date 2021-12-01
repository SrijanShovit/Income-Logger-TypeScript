import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//tuples
//the type of element at a particular index is fixed
//this is diff from arrays
let tup = ['ryu', 25, true];
// tup[0] = true  (invalid)
tup[1] = 10; //valid
