// const days=['Mon','Tue','Wed','Thu','Fri','Sat']

// // console.log(days[0]);


// // days.forEach(function(day,index){
// //     console.log(`Day ${index+1}--${day}`);
// // })

// // const months=['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov']

// // months.forEach(function(month,index){
// //     console.log(`month ${index+1} -- ${month}`);
    
// //  })
// // const tasks=['Javascript','Cybersecurity','Hacking','C language','deld','Html','AM 2','Physics','Eat','drink','repeat']

// // tasks.forEach(function(task,index){
// //     console.log(`task no:${index+1} -- ${task}`);
    
// // })
// console.log(days.length);


// // for (let i = days.length-1; i >=0 ; i--) {
// //     const element = days[i];
// //     console.log(element)
    
// // }




// for (let index = days.length-1; index >=0; index--) {
//     console.log(days[index]);
    
    
// }
const myTodos = []
myTodos.push('Buy Bread')
myTodos.push('Record videos for gym')
myTodos.push('go to Gym')

// myTodos.forEach(function(todo,index){
//     console.log(`Your task no. ${index + 1} is ${todo}`);
    
// })

for (let index = 0; index < myTodos.length; index++) {
    const element = myTodos[index];
    console.log(`Your task no. ${index + 1} is ${element}`);   
}