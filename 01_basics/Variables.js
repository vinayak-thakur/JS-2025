const accountId = 1234567890;
let accountName = "John Doe";
var accountBalance = 1000.50;
let accounttype;

console.table([ accountId, accountName, accountBalance, accounttype ]);

/// var is function scoped, let is block scoped, and const is block scoped and cannot be reassigned
// var is not used that much anymore, let is preferred for variables that can change, and const is used for variables that should not change. 

// variable which is not initialized will be undefined
// variable which is initialized will have the value assigned to it