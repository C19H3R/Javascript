// // // alert('File is attached')
// // // console.log(document.documentURI);
// // // console.log(document.title);
// // console.log(document.title);
// // document.title = 'I have chaned'
// // // 

// // console.log(document.getElementById('idone').innerHTML);

// // document.getElementById('idone')
// // document.getElementsByClassName('')

// // const myElement = document.querySelector('p')
// // console.log(myElement.textContent);

// // myElement.textContent = 'I am being changed for JS'

// const myPElements = document.querySelectorAll('p')

// myPElements.forEach((p)=>{
//     p.textContent = 'I am changed'
//     // p.remove()
// })

// const myNewPara = document.createElement('p')

// myNewPara.textContent = 'I Was added via JS'

// document.querySelector('body').appendChild(myNewPara)

// document.querySelector('button').addEventListener('click',()=>{
//     // console.log('Button was pressed!');
//     event.target.textContent = 'I was Clicked'
    
// })

//track ip form

document.querySelector('#myform').addEventListener('change',(event)=>{

    console.log(event.target.value);
    

})


