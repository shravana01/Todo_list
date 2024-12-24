let todoList = [];

function addTodo() {
    const newTodo = document.getElementById("newTodo").value;
    if (newTodo.trim() === "") {
        alert("Please enter a todo!");
        return;
    }
    
    todoList.push(newTodo);
    document.getElementById("newTodo").value = "";
    renderTodoList();
}

function editTodo(index) {
    const updatedTodo = prompt("Edit your todo:", todoList[index]);
    if (updatedTodo !== null && updatedTodo.trim() !== "") {
        todoList[index] = updatedTodo;
        renderTodoList();
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function renderTodoList() {
    const todoListElement = document.getElementById("todoList");
    todoListElement.innerHTML = "";

    todoList.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <button onclick="editTodo(${index})">Edit</button> 
        <button onclick="deleteTodo(${index})">Delete</button>`;
        todoListElement.appendChild(li);
    });
}