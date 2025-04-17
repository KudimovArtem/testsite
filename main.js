let question = [
  "2x1",
  "2x2",
  "2x3",
  "2x4",
  "2x5",
  "2x6",
  "2x7",
  "2x8",
  "2x9",
  "2x10",
];
let ans = [
  2, 3, 4, 4, 5, 3, 7, 6, 5, 8, 7, 9, 11, 10, 9, 13, 11, 12, 14, 15, 13, 17, 16,
  15, 18, 19, 17, 20, 21, 22,
];
let right = [1, 1, 2, 1, 2, 3, 1, 2, 1, 1];
let num;
function getQuest() {
  num = Math.ceil(Math.random() * 10 - 1);
  console.log(num);

  document.getElementById("question").innerHTML = question[num];
  for (let i = 1; i < 4; i++) {
    document.getElementById(`ans${i}`).innerText = ans[num * 3 + i - 1];
  }

  document.getElementById("start").style.display = "none";
  document.getElementById("check").style.visibility = "visible";
}

function checkResult() {
  if (
    document.querySelector('input[name="answer"]:checked').value == right[num]
  ) {
    document.getElementById("question").innerHTML = "ПРАВИЛЬНО!!!";
  } else {
    document.getElementById("question").innerHTML = "Не правильно!";
  }
  setTimeout(getQuest, 1000);
}
document.getElementById("start").onclick = showblock;
document.getElementById("check").onclick = checkResult;

function showblock() {
  let element = document.querySelector(".block");
  if (element.classList.contains("show-block")) {
    element.classList.remove("show-block");
  } else {
    element.classList.add("show-block");
  }
  getQuest();
}
