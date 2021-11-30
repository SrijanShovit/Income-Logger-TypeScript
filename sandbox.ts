let  man = 'mario' //TS uses type inference so we may or may not explicitily define the type


//TS uses strict types i.e. a variable having data of one type
//can't have data of other type at a later stage

let age = 30
let isBlackBelt = false

//man = 20  //would give error
man = 'luigi'

console.log(man)


//specifying what type of data a function can accept
//In this way TS helps us to handle type errors b4 compilation to JS
const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(46.8))