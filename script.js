let userInput=document.querySelector(".user-input");
let addButton = document.querySelector(".add-button");
let todoList = document.querySelector(".todo-item");
const handleAddButton=()=>{
    let todoItem=userInput.value;
    console.log(`${todoItem} was added`);
    const newList= document.createElement("li");
    newList.textContent=todoItem;
    todoList.appendChild(newList);
    userInput.value="";
    
}
addButton.addEventListener('click', handleAddButton)