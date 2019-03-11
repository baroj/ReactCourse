//Object Destructuring


// const person = {
//     name: 'Johnattan',
//     age: '26',
//     location:{
//         city : 'Deerfield',
//         temp : '75'
//     }
// }

// //default
// const { name = 'Anonymous', age } = person;
// //const name = person.name
// //const age = person.age

// //renamed
// const {city , temp: temperature} = person.location

// console.log(`Its ${temperature} in ${city}`)


//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street='Non', city, state, zip ] = address;