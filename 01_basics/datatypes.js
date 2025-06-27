"use strict"; // it uses the strict mode: newer syntax, no global variables, etc.
// alert cant be used in strict mode, so we use console.log instead

// datatypes:
const accountId = 1234567890; // number
let accountName = "John Doe"; // string
var accountBalance = 1000.50; // number
let accountType; // undefined
let isActive = true; // boolean
let id = null; // null
// object datatype :
let account = {
    id: accountId,
    name: accountName,
    balance: accountBalance,
    type: accountType,
    isActive: isActive
};

console.log(typeof account); // object
console.log(typeof accountId); // number
console.log(typeof accountName); // string
console.log(typeof accountBalance); // number
console.log(typeof accountType); // undefined
console.log(typeof isActive); // boolean 

// undefined and null are special types in JavaScript
// undefined means a variable has been declared but not assigned a value
// null means a variable has been declared and explicitly assigned no value