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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS
//right now the function doesn't know what properties it recieved and returned with object
//so generics help here to attach properties
// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100);;
//     return {...obj,uid}
// }
// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);;
//     return {...obj,uid}
// }
//but even on using generics there is loss of specifying type of argument (i.e. object here)
//so we use extends object
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);;
//     return {...obj,uid}
// }
//we can be even more specific by saying we want an object that has name property
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    ;
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.uid);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
};
