let greet:Function

//greet = 'hello'

greet = () => {
    console.log("hello, again")
}


//c is  optional parameter
//d has a default value so may or may not be passed
///always put required parameters first otherwise while passing they'll get mixed up
const add = (a:number, b:number,c?:number | string,d:boolean = false) => {
    console.log(a+b)
    // console.log(a+'b')
    console.log(c)            //undefined
    console.log(d)             //false
}
add(5,10)


//TS automatically refers return type of a function and set that type to assigned variable
//We may or may not specify rteurn type pf function
//if function has no return type then by default void is returned
const minus = (a:number,b:number):number =>{
    return a-b;
}
let result = minus(5,10);
// result = 'result'