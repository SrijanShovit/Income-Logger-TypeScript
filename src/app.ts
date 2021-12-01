//classes
//public is default behaviour of things associated with class
class Invoice{
    readonly client:string;   //readonly can be read from anywhere but changed from nowhere;not even class
    private details:string;   //private can be only within the class
    public amount:number;

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
