const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const tabs = document.querySelectorAll(".task_tabs div");
let mode = "all";
let taskList = [];
let filterList = [];

addButton.addEventListener("click", addTask);
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (ev) {
    filter(ev);
  });
}
function addTask() {
  let task = {
    id: randomIdGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<li class="task">
    <div class="task_done">${list[i].taskContent}</div>
    <div>
      <button onClick="toggleComplete('${list[i].id}')">Check</button>
      <button onClick="deleteTask('${list[i].id}')">Delete</button>
    </div>
  </li>`;
    } else {
      resultHTML += `<li class="task">
      <div>${list[i].taskContent}</div>
      <div>
        <button onClick="toggleComplete('${list[i].id}')">Check</button>
        <button onClick="deleteTask('${list[i].id}')">Delete</button>
      </div>
    </li>`;
    }
  }
  document.getElementById("taskBoard").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
  console.log(taskList);
}
function filter(ev) {
  if (ev) {
    mode = ev.target.id;
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("under_line");
    }
    ev.target.classList.add("under_line");
  }

  filterList = [];
  if (mode == "all") {
    render();
  } else if (mode == "onGoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete) {
        filterList.push(taskList[i]);
      }
    }
  }
  render();
  console.log(filterList);
}
function randomIdGenerate() {
  return Math.random().toString(36).substring(2, 9);
}
