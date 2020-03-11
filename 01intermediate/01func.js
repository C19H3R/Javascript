//functions

let sayHello = function(name){
    console.log(`Geeting message for ${name}`);
    console.log(`Hey ${name}`);
}

// 1)name
// 2)function
// 3)block of code

// console.log();
// sayHello('John')

let fulNameMaker = function(firstName,lastName){
    console.log("Welcome to LCO")
    console.log(`Happy to have you, ${firstName} ${lastName}`);
    
}

// fulNameMaker('John','Doe')


let myAdder = function(num1,num2){
    let added = num1+num2
    return added
}
// let myResult =myAdder(3,5)
// console.log(myResult);

let myMult = function(num1,num2){
    let mult =num1*num2
    return mult
}
// let myResult = myMult(2,4)
// console.log(myResult);

let guestUser = function(name ='unName',courseCount='0'){//default parameters
    return `Hello ${name} and your course count is: ${courseCount}`
}
console.log(guestUser('John','3'));
let name=null
