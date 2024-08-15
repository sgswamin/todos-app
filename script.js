function createTodo() {
    const listItem = document.createElement("li");
    const todosContainerElement = document.getElementById("todos-container");
    todosContainerElement.appendChild(listItem);
    const userInput = document.getElementById("note");
    listItem.innerHTML = userInput.value;
    listItem.setAttribute("onclick", "todoCheck(event, this)");
    document.getElementById('note').value = '';
  }
  
  function deleteTodos() {
    const todosContainer = document.getElementById("todos-container");
    todosContainer.innerHTML = "";
  }
  
  function todoCheck(e, todo) {
    if (todo.style.textDecoration === ""){
      todo.style.textDecoration = 'line-through';
    }
    else{
      todo.style.textDecoration = "";
    }
  }