// Front-end code for the to-do list application

// Get elements from the HTML
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        const taskTextElement = document.createElement("span");
        const removeButton = document.createElement("button");
        const completeButton = document.createElement("button");

        taskTextElement.innerText = taskText;
        taskItem.appendChild(taskTextElement);

        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", function () {
            taskItem.remove();
        });
        taskItem.appendChild(removeButton);

        completeButton.innerText = "Complete";
        completeButton.addEventListener("click", function () {
            taskTextElement.classList.toggle("completed");
        });
        taskItem.appendChild(completeButton);

        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
}

// Event listener for adding a new task
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
