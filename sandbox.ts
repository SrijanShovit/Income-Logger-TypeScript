//we can without defining a value for a variable explcitily define its type
//telling TS that is future it'll accept values of this particular type only

let character:string ;
let age:number
let isLoggedIn:boolean

//age = 'luigi
age = 30

//isLoggedIn = 25
isLoggedIn = true

//arrays
let ninjas:string[]  //still not empty array so won't allow push back
ninjas = []
ninjas.push('shaun')


//union types for mixed data types
let mixed:(string|number)[] = []
mixed.push(20)
// mixed.push(isLoggedIn)
mixed.push('20')

//uinion types to normal variable
let uid:string|number
uid = '123'
uid = 123


//objects
let ninjaOne :object
ninjaOne = {name: 'yoshi',age:30}
//array is allowed bcz array is also a type of subject
ninjaOne = ['Two']

//strictly defining to be object
let ninjaTwo : {
    name: string,
    age:number,
    beltColor: string
}

// ninjaTwo = {}