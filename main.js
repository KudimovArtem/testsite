let wordArr = ["пирог", "роман", "пират", "макет", "бекон", "герой"];

let word = wordArr[Math.floor(Math.random() * wordArr.length)];
let [s1, s2, s3, s4, s5] = word.split("");
alert(word);

let place1 = document.getElementById("sym1");
let place2 = document.getElementById("sym2");
let place3 = document.getElementById("sym3");
let place4 = document.getElementById("sym4");
let place5 = document.getElementById("sym5");
let place6 = document.getElementById("sym6");
let place7 = document.getElementById("sym7");
let place8 = document.getElementById("sym8");
let place9 = document.getElementById("sym9");
let place10 = document.getElementById("sym10");

place1.onkeyup = function () {
  if (this.value.length >= 1) place2.focus();
};
place2.onkeyup = function () {
  if (this.value.length >= 1) place3.focus();
};
place3.onkeyup = function () {
  if (this.value.length >= 1) place4.focus();
};
place4.onkeyup = function () {
  if (this.value.length >= 1) place5.focus();
};
place5.onkeyup = function () {
  if (this.value.length >= 1) this.blur();
};
place6.onkeyup = function () {
  if (this.value.length >= 1) place7.focus();
};
place7.onkeyup = function () {
  if (this.value.length >= 1) place8.focus();
};
place8.onkeyup = function () {
  if (this.value.length >= 1) place9.focus();
};
place9.onkeyup = function () {
  if (this.value.length >= 1) place10.focus();
};
place10.onkeyup = function () {
  if (this.value.length >= 1) this.blur();
};

function myFunction() {
  let sym1 = document.getElementById("sym1").value;
  if (word.includes(sym1) && sym1) {
    if (sym1 == s1) {
      place1.style.backgroundColor = "yellow";
    } else {
      place1.style.backgroundColor = "grey";
    }
  }
  let sym2 = document.getElementById("sym2").value;
  if (word.includes(sym2) && sym2) {
    if (sym2 == s2) {
      place2.style.backgroundColor = "yellow";
    } else {
      place2.style.backgroundColor = "grey";
    }
  }
  let sym3 = document.getElementById("sym3").value;
  if (word.includes(sym3) && sym3) {
    if (sym3 == s3) {
      place3.style.backgroundColor = "yellow";
    } else {
      place3.style.backgroundColor = "grey";
    }
  }
  let sym4 = document.getElementById("sym4").value;
  if (word.includes(sym4) && sym4) {
    if (sym4 == s4) {
      place4.style.backgroundColor = "yellow";
    } else {
      place4.style.backgroundColor = "grey";
    }
  }
  let sym5 = document.getElementById("sym5").value;
  if (word.includes(sym5) && sym5) {
    if (sym5 == s5) {
      place5.style.backgroundColor = "yellow";
    } else {
      place5.style.backgroundColor = "grey";
    }
  }

  let sym6 = document.getElementById("sym6").value;
  if (word.includes(sym6) && sym6) {
    if (sym6 == s1) {
      place6.style.backgroundColor = "yellow";
    } else {
      place6.style.backgroundColor = "grey";
    }
  }
  let sym7 = document.getElementById("sym7").value;
  if (word.includes(sym7) && sym7) {
    if (sym7 == s2) {
      place7.style.backgroundColor = "yellow";
    } else {
      place7.style.backgroundColor = "grey";
    }
  }
  let sym8 = document.getElementById("sym8").value;
  if (word.includes(sym8) && sym8) {
    if (sym8 == s3) {
      place8.style.backgroundColor = "yellow";
    } else {
      place8.style.backgroundColor = "grey";
    }
  }
  let sym9 = document.getElementById("sym9").value;
  if (word.includes(sym9) && sym9) {
    if (sym9 == s4) {
      place9.style.backgroundColor = "yellow";
    } else {
      place9.style.backgroundColor = "grey";
    }
  }
  let sym10 = document.getElementById("sym10").value;
  if (word.includes(sym10) && sym10) {
    if (sym10 == s5) {
      place10.style.backgroundColor = "yellow";
    } else {
      place10.style.backgroundColor = "grey";
    }
  }
}
document.getElementById("butt").onclick = myFunction;
