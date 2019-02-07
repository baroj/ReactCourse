//import './utils.js'
import subtract, {square, add} from './utils.js'

// console.log('app.js is running!')
// console.log(square(4));
// console.log(add(4,123));
//console.log(subtract(5, 1))

//person.js 
//name export isAdult() - true if adult 
//named export canDrink() - true if 21 over

import isSenior, {isAdult, canDrink} from './person.js'

console.log(isAdult(18));
console.log(canDrink(17));
console.log(isSenior(64));


