//interfaces
//we won't create objects from it but 
//we r just spepcifying if later a variable claims to be IsPerson 
//then it should have following properties
interface IsPerson{
    name: string;
    age: number;
    speak(a:string):void;
    spend(a:number):void;
}

const me:IsPerson = {
    name:'shaun',
    age: 30,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number{
        console.log(amount);
        return amount;
    },
    // skills: {}
}

console.log(me)

const greetPerson = (person:IsPerson) => {
    console.log('hello' + person.name)
}

greetPerson(me)

import {Invoice} from './classes/Invoice.js'

const invOne = new Invoice('mario','work on mario website',250);
const invTwo = new Invoice('luigi','work on luigi website',350);

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)


invoices.forEach(inv => {
    console.log(inv.client,inv.amount,inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )
})
