const sayHello = (name)=>`Hey there , ${name} !`

//console.log(sayHello('sammy'));

const toDos = [{
    title:'Buy Bread',
    isDone:true,
},{
    title:'Go to Gym',
    isDone:true,

},{
    
    title:'Record Videos',
    isDone:false,
},{
    title:'Play Cricket',
    isDone:false,
},{
    title:'Understand Javascript',
    isDone:true,
},
{
    title:'eat Pizza',
    isDone:false,
}]

const thingsDone = toDos.filter((todo)=> todo.isDone === false)

//console.log('Our Work left for today!!!!!');
let print = (item,index)=>{
//console.log(`${index+1}) ${item.title} !!`);
    
}
// for (let i = 0; i < thingsDone.length; i++) {
//     const element = thingsDone[i].title;
//     console.log(element)
// }
thingsDone.forEach(print)
// console.log(thingsDone[0].title);
//Assignment
//6 elements should be true or false


const cameras = {
    price:600,
    weight:2000,
    description: function(){
      return `This canon camera is of ${this.price}`
   
    }
    
}

console.log(cameras.description());





