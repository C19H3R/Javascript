let userEmail = 'abc123abc'
let password = '1234dghdg'

let userChecker = function(myStrng=''){
    if((myStrng.includes(123))&&(myStrng.length>6)){
        return true
    }else {
        return false
    }
}

let passChecker = function (myStrng=''){
    if((myStrng.includes(123))&&(myStrng.length>8)){
        return true
    }else {
        return false
    }
}
console.log(userChecker(userEmail));
console.log(passChecker(password));


