let wordArr = ["пирог", "роман", "пират", "макет", "бекон", "герой"];

let word = wordArr[Math.floor(Math.random() * wordArr.length)];
let [s1, s2, s3, s4, s5] = word.split("");
alert(word);

let index = 0;

function myFunction() {
  let place1 = document.getElementById(`sym${index + 1}`);
  /*place1.addEventListener("input", function () {
    if (this.value.length >= 1) place2.focus();
  });*/
  let sym1 = document.getElementById(`sym${index + 1}`).value.toLocaleLowerCase();
  if (word.includes(sym1) && sym1) {
    if (sym1 == s1) {
      place1.style.backgroundColor = "green";
    } else {
      place1.style.backgroundColor = "yellow";
    }
  } else {
    place1.style.backgroundColor = "grey";
  }

  let place2 = document.getElementById(`sym${index + 2}`);
  /*place2.onkeyup = function () {
    if (this.value.length >= 1) place3.focus();
  };*/
  let sym2 = document.getElementById(`sym${index + 2}`).value.toLocaleLowerCase();
  if (word.includes(sym2) && sym2) {
    if (sym2 == s2) {
      place2.style.backgroundColor = "green";
    } else {
      place2.style.backgroundColor = "yellow";
    }
  } else {
    place2.style.backgroundColor = "grey";
  }

  let place3 = document.getElementById(`sym${index + 3}`);
  /*place3.onkeyup = function () {
    if (this.value.length >= 1) place4.focus();
  };*/
  let sym3 = document.getElementById(`sym${index + 3}`).value.toLocaleLowerCase();
  if (word.includes(sym3) && sym3) {
    if (sym3 == s3) {
      place3.style.backgroundColor = "green";
    } else {
      place3.style.backgroundColor = "yellow";
    }
  } else {
    place3.style.backgroundColor = "grey";
  }

  let place4 = document.getElementById(`sym${index + 4}`);
  /*place4.onkeyup = function () {
    if (this.value.length >= 1) place5.focus();
  };*/
  let sym4 = document.getElementById(`sym${index + 4}`).value.toLocaleLowerCase();
  if (word.includes(sym4) && sym4) {
    if (sym4 == s4) {
      place4.style.backgroundColor = "green";
    } else {
      place4.style.backgroundColor = "yellow";
    }
  } else {
    place4.style.backgroundColor = "grey";
  }

  let place5 = document.getElementById(`sym${index + 5}`);
  /*place5.onkeyup = function () {
    if (this.value.length >= 1) this.blur();
  };*/
  let sym5 = document.getElementById(`sym${index + 5}`).value.toLocaleLowerCase();
  if (word.includes(sym5) && sym5) {
    if (sym5 == s5) {
      place5.style.backgroundColor = "green";
    } else {
      place5.style.backgroundColor = "yellow";
    }
  } else {
    place5.style.backgroundColor = "grey";
  }
  let ans = sym1 + sym2 + sym3 + sym4 + sym5;
  if (ans == word) {
    alert("Победа");
    let again = confirm("Заново?");
    again ? location.reload() : alert("Пока!");
  }
  index += 5;
}

document.getElementById("butt").onclick = myFunction;

