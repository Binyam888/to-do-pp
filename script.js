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
    else{let value = inputFeild.value
        let item = document.createElement('li')
        item.innerText = value
        console.log(item)
        ul.appendChild(item)
        // to clear the value in the input feild after typed
        inputFeild.value=""
        //to focus on the input 
        inputFeild.focus()
    }
    
}

addBttn.addEventListener('click',onClick)
