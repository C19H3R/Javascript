// //let myArray = ['name',33,true]
  let myYoutubeVideo =
// {
//      courseName:'Javascript',
//      coursePrice:799,
//      courseDescription:'the best course on earth'
//  }
// //  {
// //     "company": "Hickle - Hilpert",
// //     "username": "Romaine39",
// //     "password": "LqeXoPp39teJzQ6",
// //     "role": "administrator",
// //     "phone": "(446) 104-1523",
// //     "cell": "(214) 961-8031"
// //   }
  
{
    title:'Loops in javascript',
    videoLength:15,
    creator:'Karan Batra',
    videoDescription:'this is video description and a long one'
}

let myYtVid ={
    title:'Functions in javascript',
    videoLength:10,
    creator:'Karan Batra',
    videoDescription:'this is video description and a long one'
}

// console.log(myYoutubeVideo);


// console.log(`Hey new course on ${myYoutubeVideo.courseName} \n @ ${myYoutubeVideo.coursePrice}\n description:${myYoutubeVideo.courseDescription}`);
let changeVideoLength=function(myObject){
    return{
      formatOne:`Time of this video is ${myObject.videoLength+2} minutesm`
      ,
      formatTwo:`Time of this video is ${myObject.videoLength+5} minutesm`
    }
    
}

let adOne =changeVideoLength(myYtVid)
console.log(adOne.formatOne);






















