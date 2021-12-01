//TS doesn't know what is going to be in our HTML file

//here TS knoows what type of tag we r grabbing
// const anchor = document.querySelector('a')!;   //! to tell TS this won't return null

// console.log(anchor.href);

// if (anchor){
//     console.log((anchor))
// }

//but with class name TS doesn't know exactly what type  bcz class can be used with any HTML element
//so use type casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

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
