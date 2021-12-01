//classes
class Invoice{
    client:string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client =c;
        this.details =d;
        this.amount =a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario','work on mario website',250);
const invTwo = new Invoice('luigi','work on luigi website',350);

console.log(invOne)

//array which will have objects only made out of  Invoice class
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
console.log(invoices)

invOne.amount = 400
invOne.client = 'mariola'
console.log(invoices)


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
