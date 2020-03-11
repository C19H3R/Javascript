// && -AND operator
//  both should be true
//
// || -OR operation 
//  either of the two need to be true
//
// ! -Reverse it to true from false vica versa

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(!isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message to user')
    console.log('Grant acess to paid course')
}else if(!isVerified || isGuest){
    console.log('allow free preview available')
}else{
    console.log('Message: contact admin')
}
