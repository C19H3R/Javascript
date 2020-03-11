// const myTodos = ['Buy Bread','Go to Gym','Record Youtube videos']

// console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [{
    title:'Buy Bread',
    isDone:false,
},{
    title:'Go to Gym',
    isDone:false,
},{
    title:'Record Youtube Videos',
    isDone:false,
}]

// const index = newTodos.findIndex(function(todo){
//     console.log(todo);
    
//     return todo.title === 'Go to Gym'
// })

// console.log(index); // answer one


//Meathod 1
// const findTodo = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo,index){
//         console.log('\n\n');
        
//         console.log(todo.title.toLowerCase() === title.toLowerCase());
        
        
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     console.log(index);
    
//     return myTodos[index]
// }


//Meathod 2  ---> is same but find returens the value whereas findindex returns a index 
const findTodo = function(myTodos,title){
    const titleReturned = myTodos.find(function(Todo,index){
        return Todo.title.toLowerCase()===title.toLowerCase()
    }) 
    
    return titleReturned

}

let printMe = findTodo(newTodos, 'Record Youtube Videos')
console.log(printMe);

