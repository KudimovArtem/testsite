"use strict";

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
}

function showTask() {
  taskList.innerHTML = "";
  arrTask.forEach((el) => {
    let itemTask = document.createElement("li");
    itemTask.innerHTML = `${el} <button id="delBtn">Удалить</button>`;
    itemTask.querySelector("#delBtn").addEventListener("click", function () {
      itemTask.remove();
      arrTask.splice(arrTask.indexOf(itemTask.textContent.split(" ")[0]), 1);
      /*arrTask = arrTask.filter(
        (el) => el !== itemTask.textContent.split(" ")[0]
      );*/
      localStorage.setItem("tasks", JSON.stringify(arrTask));
    });
    taskList.appendChild(itemTask);
    localStorage.setItem("tasks", JSON.stringify(arrTask));
  });
}
