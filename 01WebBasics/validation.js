// alert("hello")
function myValo(){
    let myValue = document.getElementById('myform').value;

    if (isNaN(myValue)|| myValue<1||myValue>20) {
        document.querySelector('#idone').textContent = 'INVALID'
        
    }else{
        document.querySelector('#idone').textContent = 'VALID'
        
    }
}

//form validation

document.querySelector('.myformone').addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value=''
    
    event.target.realname.value=''
    if(event.target.confirm.value==event.target.confirm01.value)
    {
        const myNewPara = document.createElement('p')
        myNewPara.textContent = 'passwords match'
        document.querySelector('body').appendChild(myNewPara)
    }else{
        const myNewPara = document.createElement('p')
        myNewPara.textContent = 'passwords dont match'
        document.querySelector('body').appendChild(myNewPara)
    }
    event.target.confirm.value=''
    
    event.target.confirm01.value=''
    

})