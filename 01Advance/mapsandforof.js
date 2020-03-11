var john={
    name:'I am john',
    age:24,
    isActive:true
}

var marry = {
    name:'I am sam',
    age:23,
    isActive:true
}

var sam ={
    name:'I am sam',
    age:29,
    isActive:false
}

let users = new Map()

console.log(users);

// console.log(typeof users);
users .set('u01',john)//first john is key made by me
                        //second from user i/p
users .set('u02',marry)
users .set('u03',sam)

console.log(users.size);
console.log(users.get('u01').name);
console.log(users.keys());
console.log(users.values());

for (const keys of users.values()) {
    console.log(keys);
    
}

for (const [key ,value] of  users.entries()) {
    console.log(key+'='+value.name);
    
}

users.forEach((value,key)=>console.log(key+'='+value.name));

var arrOfArr = [['one','1'],['two','2'],['three','3']]

var newMap = new Map(arrOfArr)
console.log(newMap);
for (const keys of arrOfArr) {
    console.log(keys[1]+'='+keys[0]);
    
}

