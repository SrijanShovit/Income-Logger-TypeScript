//example 1
let greet: (a:string,b:string) => void;

greet = (name:string,greet:string) => {
    console.log(`${name} says ${greet}`)
}

//ex 2
let calc: (a:number,b:number,c:string) => number

calc = (numOne:number,numTwo:number,action:string) =>{
    if (action === 'add'){
        return numOne + numTwo;
    }
    else{
        return numOne - numTwo
    }
}

//ex 3
let logDetails : (obj:{name:string,age:number}) => void;
type person = {name:string,age:number};

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`); 
}
