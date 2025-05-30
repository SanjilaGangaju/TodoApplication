// Dom Selections
let userInput = document.querySelector(".user-input");
let addButton = document.querySelector(".add-button");
let todoList = document.querySelector(".todo-list");

// local storage functions
const getTodolistFromLocal = () => {
  return JSON.parse(localStorage.getItem("TodoList"));
};
const addTodoListLocalStorage = (todolists) => {
  return localStorage.setItem("TodoList", JSON.stringify(todolists));
};

// Dynamic DOM insertion function
const addTodoDynamic = (currElem) => {
  const newList = document.createElement("li");
  newList.textContent = currElem;
  newList.classList.add("list-item");
  let delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.classList.add("del-button");
  newList.append(delButton);
  todoList.appendChild(newList);
};
let todolists = [];
todolists = getTodolistFromLocal() || [];

// Add Button Click Handler
const handleAddButton = () => {
  let todoItem = userInput.value.trim();
  if (todoItem !== "" && !todolists.includes(todoItem)) {
    todolists.push(userInput.value);
    // todolists=[...new Set(todolists)];
    addTodoListLocalStorage(todolists);
    addTodoDynamic(todoItem);
  }
  userInput.value = "";
};

// Display Todos on Page Load
const showTodoList = () => {
  todolists.forEach((currElem) => {
    addTodoDynamic(currElem);
  });
};
showTodoList();
// Delete Button Click Handler
const handleDelButton = (e) => {
  const todoToRemove = e.target;
  if (todoToRemove && todoToRemove.classList.contains("del-button")) {
    const li = todoToRemove.closest("li");

    if (li) {
      const todoText = li.childNodes[0].nodeValue.trim();
      li.remove();
      todolists = todolists.filter((curTodo) => {
        return curTodo !== todoText.toLowerCase();
      });
      addTodoListLocalStorage(todolists);
    }
  }
};

addButton.addEventListener("click", handleAddButton);
todoList.addEventListener("click", handleDelButton);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleAddButton();
});
