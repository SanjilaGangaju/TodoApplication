let userInput = document.querySelector(".user-input");
let addButton = document.querySelector(".add-button");
let todoList = document.querySelector(".todo-item");
let delButt = document.querySelector(".del-button");

const handleAddButton = () => {
  let todoItem = userInput.value;
  console.log(`${todoItem} was added`);

  const newList = document.createElement("li");
  newList.textContent = todoItem;
  newList.classList.add("list-item");
  let delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.classList.add("del-button");
  newList.append(delButton);
  todoList.appendChild(newList);
  userInput.value = "";
};
const handleDelButton=(e)=>{
    console.log(e.target);
    if (e.target && e.target.matches("button.del-button")){
        const li =e.target.closest('li');
        if (li) li.remove();
    }
 
  
}
addButton.addEventListener("click", handleAddButton);
todoList.addEventListener('click', handleDelButton);
