// //data type --> Array
// // starts from 0


// const superHeroes = ['Iron Man','Spider Man','Captain America','Thor']


// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[2]);
// console.log(superHeroes.length);
// console.log([superHeroes.length-1]);

// console.log(superHeroes[superHeroes.length-1]);

// console.log(`We have ${superHeroes.length} super heroes`);

// console.log(`We have ${superHeroes[superHeroes.length-1]} super heroes`);

const numbers = ['One','Two','Three','Four','Five','Six']


// numbers[1]='SOME THING'
// console.log(numbers);

// //start
// numbers.shift() //our first index is gone  ==>
// console.log(numbers.shift());

// // console.log(numbers);
// numbers.unshift('SOME THING')
// console.log(numbers);


//end

// numbers.pop()
// console.log(numbers.pop());

// console.log(numbers)

numbers.push('Seven')
console.log(numbers);


//middle
numbers.splice(2, 1 ,'SOME THING')
console.log(numbers);
