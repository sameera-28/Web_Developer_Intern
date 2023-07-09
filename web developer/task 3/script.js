function addTask() {
    var taskTitleInput = document.getElementById("taskTitle");
    var taskDescriptionInput = document.getElementById("taskDescription");
    var taskTitle = taskTitleInput.value;
    var taskDescription = taskDescriptionInput.value;
  
    if (taskTitle.trim() !== "" && taskDescription.trim() !== "") {
      var taskItem = document.createElement("li");
      taskItem.className = "list-group-item task-item";
  
      var taskTitleSpan = document.createElement("span");
      taskTitleSpan.textContent = taskTitle;
      taskItem.appendChild(taskTitleSpan);
  
      var taskDescriptionSpan = document.createElement("span");
      taskDescriptionSpan.textContent = taskDescription;
      taskItem.appendChild(taskDescriptionSpan);
  
      var deleteButton = document.createElement("span");
      deleteButton.className = "delete-button";
      deleteButton.innerHTML = "&times;";
      deleteButton.onclick = function() {
        deleteTask(this.parentNode);
      };
      taskItem.appendChild(deleteButton);
  
      document.getElementById("taskList").appendChild(taskItem);
      taskTitleInput.value = "";
      taskDescriptionInput.value = "";
    }
  }
  
  function deleteTask(taskItem) {
    taskItem.remove();
  }
  