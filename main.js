const addBtn = document.getElementById("addBtn");
const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");

let arrTask = JSON.parse(localStorage.getItem("tasks")) || [];

window.addEventListener("load", showTask);

function addTask() {
  let textTask = inputTask.value.trim();
  if (textTask !== "") {
    arrTask.push(textTask);
    localStorage.setItem("tasks", JSON.stringify(arrTask));
    inputTask.value = "";
    console.log(arrTask);
    showTask();
  }
}

function updateTaskIndex() {
  document
    .querySelectorAll("#taskList li")
    .forEach((el, index) => (el.dataset.index = index));
}

function delTask(taskIndex) {
  arrTask.splice(taskIndex, 1);
  updateTaskIndex();
  localStorage.setItem("tasks", JSON.stringify(arrTask));
  showTask();
}

function changeTask(itemTask, taskIndex) {
  const oldTask = itemTask.querySelector("#taskText");
  itemTask.innerHTML = `<input type="text" id="inputField" value="${oldTask.textContent}"> <button id="okBtn">Принять</button>`;
  const inputField = itemTask.querySelector("#inputField");
  inputField.focus();
  itemTask.querySelector("#okBtn").addEventListener("click", function () {
    const newText = inputField.value.trim();
    if (newText) {
      arrTask[taskIndex] = newText;
      localStorage.setItem("tasks", JSON.stringify(arrTask));
      showTask();
    } else {
      showTask();
    }
  });
}

function showTask() {
  taskList.innerHTML = "";
  arrTask.forEach((el, index) => {
    let itemTask = document.createElement("li");
    itemTask.innerHTML = `<span id="taskText">${el}</span> <button id="changeBtn">Изменить</button> <button id="delBtn">Удалить</button>`;
    itemTask.dataset.index = index;
    const taskIndex = +itemTask.dataset.index;
    itemTask.querySelector("#delBtn").addEventListener("click", function () {
      delTask(taskIndex);
    });
    itemTask.querySelector("#changeBtn").addEventListener("click", function () {
      changeTask(itemTask, taskIndex);
    });
    taskList.appendChild(itemTask);
  });
}

addBtn.addEventListener("click", addTask);

