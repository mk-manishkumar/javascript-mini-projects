let inputTodo = document.querySelector(".input");
const containerList = document.querySelector(".container");

let taskList = [];

// Function to display the todo-list after clicking the add button
function displayList() {
  containerList.innerHTML = "";
  if (inputTodo.value === "") {
    alert("Please enter something");
  } else {
    taskList.push({
      task: inputTodo.value,
      checked: false,
    });
    let task = "";
    for (let i = 0; i < taskList.length; i++) {
      task += `
        <div class="lists">
        <input type="text" value="${taskList[i].task}" class="list" readonly/>
        <span class="icons">
          <i class="edit fa-solid fa-pen-to-square"></i>
          <i class="delete fa-solid fa-trash"></i>
        </span>
      </div>
         `;
    }
    containerList.innerHTML = task;

    saveTasksToLocalStorage();
    displayTasks();
  }

  inputTodo.value = "";
  inputTodo.focus();
}

// Function to display the tasks from the taskList array
const displayTasks = () => {
  containerList.innerHTML = "";

  taskList.forEach(function (task, index) {
    containerList.innerHTML += `
      <div class="lists">
        <input type="text" value="${task.task}" class="list" readonly/>
        <span class="icons">
          <i class="edit fa-solid fa-pen-to-square"></i>
          <i class="delete fa-solid fa-trash"></i>
        </span>
      </div>
    `;
  });
};

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Retrieve tasks from local storage when the page loads
window.addEventListener("DOMContentLoaded", function () {
  const storedTasks = localStorage.getItem("tasks");

  if (storedTasks) {
    taskList = JSON.parse(storedTasks);
    displayTasks();
  }
});

// for deleting or editing tasks
containerList.addEventListener("click", function (event) {
  // if user clicks on any delete icon
  if (event.target.classList.contains("delete")) {
    const deleteIcon = event.target;
    const taskElement = deleteIcon.parentElement.parentElement;
    const index = Array.from(containerList.children).indexOf(taskElement);
    taskList.splice(index, 1);
    displayTasks();
    saveTasksToLocalStorage();
  }

  // if user clicks on any edit icon
  if (event.target.classList.contains("edit")) {
    const editIcon = event.target;
    const taskElement = editIcon.parentElement.parentElement;
    const index = Array.from(containerList.children).indexOf(taskElement);

    const taskInput = taskElement.querySelector(".list");

    taskInput.removeAttribute("readonly");
    taskInput.focus();
    taskInput.setSelectionRange(taskInput.value.length, taskInput.value.length);

    if (editIcon.classList.contains("fa-save")) {
      editIcon.classList.remove("fa-save");
      taskInput.blur();
    } else {
      editIcon.classList.add("fa-save");
    }

    taskInput.addEventListener("blur", function () {
      taskInput.setAttribute("readonly", true);
      taskList[index].task = taskInput.value;
      saveTasksToLocalStorage();
    });
  }
});
