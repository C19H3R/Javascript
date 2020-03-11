let maths = 79
let english = 89
let science = 94
let sst = 92

let total = maths+english+science+sst
let numberOfSubjects=4

let gradeAndPercentage = function(T,N){

    let Perc = (T/N)
    console.log(`You scored : ${Perc}%`);
    
    if(Perc>=100){
        console.log('Your grade is:O');
    }else if((Perc>=90)&&(Perc<100)){
        console.log('Your grade is:A');
        
    }else if((Perc>=80)&&(Perc<90)){
        console.log('Your grade is: B');
        
    }else if((Perc>=70)&&(Perc<80)){
        console.log('Your grade is:C');
        
    }else if((Perc>=60)&&(Perc<70)){
        console.log('Your grade is:D');
        
    }else if((Perc>=50)&&(Perc<60)){
        console.log('E');
        
    }else{
        console.log('F');
        
    }

}

gradeAndPercentage(total,numberOfSubjects) 