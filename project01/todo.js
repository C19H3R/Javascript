// // alert('connected')
// var h =document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)

// document.querySelector('h1').appendChild(h)
// var val =5;
// while (val >0) {
//     console.log(val);
//     val--;
    
    
// }

var ul = document.getElementById('list');
var li;
var inpt = document.getElementById('input')


var addBtn=document.getElementById('add');
addBtn.addEventListener('click',addItem);

var allBtn=document.getElementById('every');
allBtn.addEventListener('click',allItem);


var removeBtn=document.getElementById('remove');
removeBtn.addEventListener('click',remItem);

function addItem(){
    let x =inpt.value
    if (x!='') {
        //create li
        var textnode = document.createTextNode(x)
        li = document.createElement('li')
        // li.setAttribute('class','mycheck')
        //creat check box

        var check = document.createElement('input')
        check.type = 'checkbox'
        check.setAttribute('id','check')

        //creat label

        var label = document.createElement('label')
        label.setAttribute('for','item')//optional
        //addthese on web page
        ul.appendChild(li)
        li.appendChild(check)
        li.appendChild(label)
        label.appendChild(textnode)
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className = 'visual'
        }, 7);

        inpt.value = ''


    }else{
        setTimeout(() => {
            document.getElementById('ent').className = 'visual'
        }, 0);
        setTimeout(()=>{
            document.getElementById('ent').className = 'exter'
        },1000)
       // document.querySelector('#container').insertBefore(errx,document.getElementById('add'))
        
    }
    // console.log(x)
    // li = document.createElement('p')
    // li.textContent = x
    // document.getElementById('list').appendChild(li)


}
function allItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] ) {
            ul.removeChild(li[index])
        }
        
    }
    
}
function remItem() {
    // console.log('remove bt clicked');
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element);
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
        
    }
    
}