let myTodo ={
    day:'Monday',
    meetings:0,
    meetDone:0,
}

let addMeeting = function(todo,meet=0){1
    todo.meetings= todo.meetings + meet
}

let meetingsDone = function(todo ,meet = 0){
    todo.meetDone = todo.meetDone + meet
}

let resetDay = function(todo){
    todo.meetDone=0
    todo.meetings=0
}

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone;
    // console.log(meetLeft)
    // console.log("\n\n\n");
    
    return `You have ${meetLeft} meetings today!`
}

addMeeting(myTodo,5)
meetingsDone(myTodo,2)
console.log(myTodo);

console.log(getSummaryOfDay(myTodo));
