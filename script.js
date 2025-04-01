function myFunction() {
  let num1 = Number(document.getElementById("cost").value);
  let num2 = Number(document.getElementById("mass").value);
  let result = (num1 * 1000) / num2;
  document.getElementById("resmass").innerHTML = result.toFixed(2);
}
document.getElementById("butt").onclick = myFunction;
