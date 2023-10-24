const ul = document.getElementById("unorderedLIst")
console.log(ul)
let inputFeild = document.getElementById("input")
console.log(inputFeild)
const addBttn = document.getElementById("addButton")
console.log(addBttn)


let onClick =()=>{
    if(inputFeild.value === ""){
        alert("please write something")
    }
    else{
        
        let value = inputFeild.value
        let li = document.createElement('li')
li.className='list'
        li.innerText = value
        ul.appendChild(li)
let btn = document.createElement('button')
    btn.innerText="delete"
    btn.className= 'dletebtn'
li.appendChild(btn)
        // to clear the value in the input feild after typed
        inputFeild.value=""
        //to focus on the input 
        inputFeild.focus()
    }
    
}

addBttn.addEventListener('click',onClick)
ul.addEventListener('click',onDelete=(event)=>{
if(event.target.className === "dletebtn"){
    
    let parent = event.target.parentElement
    console.log(parent)
    parent.remove()
}
})
