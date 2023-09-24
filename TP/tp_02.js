/** VARIABLES SCOPE */

// case: VAR

var a = "Toto" //GLOBAL VARIABLES

{
    var a = "Tati" //REDECLARING
}

console.log(a)

// case: CONST
const age = 17 //LOCAL VARIABLES

{
    const age = 16 //ANOTHER SCOPE
}

console.log(age)

// case: LET

let food = "Akoume" //LOCAL VARIABLES

{
    let food = "Burger" //ANOTHER SCOPE
}

console.log(food)

