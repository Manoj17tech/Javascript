// // Accessing Button
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  const toDoInput = document.getElementById("todo-input");
  const inputText = toDoInput.value.trim();

  if (inputText === "") {
    alert("Please Enter a Task..!");
    return;
  }

  // Create a HTML for to-do List
  // Accessing the ordered list

  const toDoList = document.getElementById("todo-list");

  const newItem = document.createElement("li");

  newItem.innerHTML = `${inputText}    <button class ='delete-btn'>Delete</button>`;

  newItem.querySelector("button").onclick = function () {
    newItem.remove();
  };

  toDoList.append(newItem);
  toDoInput.value = "";
});


// First Class Functions

// const greet = function (name){
//   return `Hello ${name}`
// }

// console.log(greet("Manoj"));


// // Higher Order Functions

// function processUserInput(callback){
//   const name = "Namu";

//   console.log(callback(name));
  
// }

// processUserInput(greet)


// 
