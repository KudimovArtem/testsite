
let addBtn = document.getElementById("addBtn");
const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");

let arrTask = JSON.parse(localStorage.getItem("tasks")) || [];

window.addEventListener("load", showTask);

function addTask() {
  let textTask = inputTask.value.trim();
  if (textTask !== "") {
    arrTask.push(textTask);
    inputTask.value = "";
    showTask();
  }
  localStorage.setItem("tasks", JSON.stringify(arrTask));
}

function updateTaskIndex() {
  document.querySelector('#taskList li').forEach((el, index) => 
    (el.dataset.index = index));
}

function showTask() {
  taskList.innerHTML = "";
  arrTask.forEach((el, index) => {
    let itemTask = document.createElement("li");
    itemTask.innerHTML = `${el} <button id="delBtn">Удалить</button>`;
    itemTask.dataset.index = index;
    itemTask.querySelector("#delBtn").addEventListener("click", function () {
      const indexTask = +itemTask.dataset.index;
      itemTask.remove();
      arrTask.splice(indexTask, 1);
      updateTaskIndex();   
      localStorage.setItem("tasks", JSON.stringify(arrTask));
    });
    taskList.appendChild(itemTask);  
  });
}

addBtn.addEventListener("click", addTask);
