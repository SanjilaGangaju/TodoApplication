let userInput = document.querySelector(".user-input");
let addButton = document.querySelector(".add-button");
let todoList = document.querySelector(".todo-item");
let delButt = document.querySelector(".del-button");

let todolists =[];
const getTodolistFromLocal =() =>{
     return JSON.parse(localStorage.getItem("TodoList"))
}
const addTotoListLocalStorage=(todolists)=>{
  return localStorage.setItem('TodoList', JSON.stringify(todolists));
}
const addTodoDynamic =(currElem)=>{
   const newList = document.createElement("li");
  newList.textContent = currElem;
  newList.classList.add("list-item");
  let delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.classList.add("del-button");
  newList.append(delButton);
  todoList.appendChild(newList);
 
}
todolists = getTodolistFromLocal() || [];
const handleAddButton = () => {
  let todoItem = userInput.value.trim();
  console.log(`${todoItem} was added`);
  if (todoItem!=="" && !todolists.includes(todoItem)){
  todolists.push(userInput.value);
  todolists=[...new Set(todolists)];
  console.log(todolists);
  localStorage.setItem("TodoList", JSON.stringify(todolists));

  addTodoDynamic(todoItem);}
  userInput.value = "";
};
 const showTodoList=()=>{
    todolists.forEach((currElem)=>{
      addTodoDynamic(currElem);    })
 }
 showTodoList();
const handleDelButton=(e)=>{
    console.log(e.target);
    const todoToRemove = e.target;
    console.log(todoToRemove);
     if (todoToRemove && todoToRemove.classList.contains("del-button")){
        const li = todoToRemove.closest('li');
        if (li) li.remove();
    }
    let todoListContent = todoToRemove.closest('li').innerText;
    todolists = todolists.filter((curTodo)=>{
      return curTodo!= todoListContent.toLowerCase();
    });
    addTotoListLocalStorage(todolists);
   
   }
 
  

addButton.addEventListener("click", handleAddButton);
todoList.addEventListener('click', handleDelButton);
