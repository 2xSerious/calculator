var btns = document.querySelectorAll(".num");
var operations = document.querySelectorAll(".keys-act");
var result = document.querySelector(".result");
var prev = document.querySelector(".prev");

var currentNum = "";
var prevNum = "";
var opr = "";
var count = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    currentNum += this.innerHTML;
    result.innerHTML = currentNum;
    prev.innerHTML += this.innerHTML;
  });
}

for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function () {
    let operator = this.innerHTML;
    console.log(operator);
    switch (operator) {
      case "CE":
        result.innerHTML = "";
        currentNum = "";
        break;
      case "C":
        result.innerHTML = "0";
        prev.innerHTML = "";
        currentNum = "";
        prevNum = "";
        count = 0;
        break;
      case "÷":
        if (count > 1) {
          prevNum = result.innerHTML;
          prev.innerHTML = prevNum + "/";
          result.innerHTML = "";
          currentNum = "";
          opr = "divide";
          count++;
          break;
        } else {
          let res = divide(prevNum, currentNum);
          result.innerHTML = "";
          currentNum = "";
          prevNum = res;
          prev.innerHTML = res + "/";
          break;
        }

      case "+":
        if (count < 1) {
          prevNum = result.innerHTML;
          prev.innerHTML = prevNum + "+";
          result.innerHTML = "";
          currentNum = "";
          opr = "sum";
          count++;
          break;
        } else {
          let res = sum(prevNum, currentNum);
          result.innerHTML = "";
          currentNum = "";
          prevNum = res;
          prev.innerHTML = res + "+";
          break;
        }

      case "×":
        if (count < 1) {
          prevNum = result.innerHTML;
          prev.innerHTML = prevNum + "*";
          result.innerHTML = "";
          currentNum = "";
          opr = "multiply";
          count++;
          break;
        } else {
          let res = multiply(prevNum, currentNum);
          result.innerHTML = "";
          currentNum = "";
          prevNum = res;
          prev.innerHTML = res + "*";
          break;
        }

      case "−":
        if (count > 1) {
          prevNum = result.innerHTML;
          prev.innerHTML = prevNum + "-";
          result.innerHTML = "";
          currentNum = "";
          opr = "substract";
          count++;
          break;
        } else {
          let res = substract(prevNum, currentNum);
          result.innerHTML = "";
          currentNum = "";
          prevNum = res;
          prev.innerHTML = res + "-";
          break;
        }

      case "=":
        count = 0;
        if (opr === "divide") {
          let res = divide(prevNum, currentNum);
          result.innerHTML = res;
          prev.innerHTML += "=" + res;
          currentNum = res;
        }
        if (opr === "sum") {
          let res = sum(prevNum, currentNum);
          result.innerHTML = res;
          prev.innerHTML += "=" + res;
          currentNum = res;
        }
        if (opr === "multiply") {
          let res = multiply(prevNum, currentNum);
          result.innerHTML = res;
          prev.innerHTML += "=" + res;
          currentNum = res;
        }
        if (opr === "substract") {
          let res = substract(prevNum, currentNum);
          result.innerHTML = res;
          prev.innerHTML += "=" + res;
          currentNum = res;
        }
    }
  });
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function sum(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function substract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

document.querySelector(".backspace").addEventListener("click", () => {
  let length = result.innerHTML.length;
  if (length > 1) {
    let subs = result.innerHTML.substring(0, length - 1);
    prev.innerHTML = prev.innerHTML.substring(0, prev.innerHTML.length - 1);
    result.innerHTML = subs;
    currentNum = subs;
  }
});

document.querySelector(".negative").addEventListener("click", () => {
  if (currentNum > 0) {
    currentNum = -Math.abs(currentNum);
    result.innerHTML = -Math.abs(currentNum);
  } else {
    currentNum = Math.abs(currentNum);
    result.innerHTML = Math.abs(currentNum);
  }
});

function handler() {}
