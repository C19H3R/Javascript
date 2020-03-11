let myTodo ={
    day:'Tuesday',
    meetings:0,
    meetDone:0,
    addMeeting:function(meet=0){
        this.meetings=this.meetings + meet
        // myTodo.meetings+meet
    },
    summary:function(){
        return `You have ${this.meetings} left for today`
    },
    reset:function(){
        this.meetDone=0
        this.meetings=0
    },
    meetDone: function(meet=0){
        this.meetDone=this.meetDone+meet
        this.meetings=this.meetings-meet
    },
}

 myTodo.addMeeting(5)
 myTodo.addMeeting(7)
 myTodo.meetDone(11)
//  console.log(myTodo);
 console.log(myTodo.summary());
 
 