//arrays 

let names = ['shuan','john','luigi']

names.push('toad')
// names = "hello"
//Invalid
// names.push(3)
// names[0] = false


let numbers = [19,8.9,7.0]
numbers.push(57)
// numbers.push('shaun')
// numbers[2] = false

let mixed = ['john',8.9]
// mixed.push(false)
mixed[0] = 1

let mixed2 = [true,'john',8.9]
mixed2.push(false)
mixed[0] = 1


//Objects - they should follow the structure as declared initially whenever changing
let ninja = {
    name : 'mario',
    belt : 'black',
    age : 36
}

ninja.age = 12
// ninja.name = 24
// ninja = 'mario'
// ninja.skills = ['karate','tae-kwon-do']

/*ninja = {
    name: 'yoshi',
    belt : 'yellow',
}*/

/*ninja = {
    name: 'yoshi',
    belt : 'blue',
    age : 35,
    skills : []
}*/

ninja = {
    name: 'yoshi',
    belt : 'blue',
    age : 35
}