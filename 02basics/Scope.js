// //let-->
// let iAmGlobal = 'someValue'
// if(true){
//     var iAmLocal='some More Value'
//     iAmGlobal= 'superman'   //changed globally
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
    
    
// }
// console.log(iAmLocal);
// console.log(iAmGlobal);
// //let -->scope depends upon the where the variable is declared
// //const-->can never be used
// //var-->always global


//Kings problem

// let king = 'Jhon'

if(true){
    // let king = 'Sam'
    if(true){
         king = 'Ram'
        console.log(king)
    }
}
if(true){
    console.log( 'I am second part: '+king);
    
}


