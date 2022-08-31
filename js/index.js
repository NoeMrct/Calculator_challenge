const calculator = document.querySelector(".content");
const display = document.querySelector(".first_text");
let secondText = document.querySelector(".second_text");
let thirdText = document.querySelector(".third_text");
let firstValue = null;
let secondValue = null;
let operator = null;
let results = null;

function buttonClick(e) {
  const key = e;
  const action = key.getAttribute("data-action");
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  if (!action) {
    if (!operator) {
      if (displayedNum === "0") {
        display.textContent = parseFloat(keyContent);
      } else if (results) {
        display.textContent = parseFloat(keyContent);
        if (secondText.textContent == null) {
          secondText.textContent = results;
        } else {
          thirdText.textContent = secondText.textContent;
          secondText.textContent = results;
        }
        firstValue = null;
        secondValue = null;
        operator = null;
        results = null;
      } else {
        display.textContent = displayedNum + parseFloat(keyContent);
      }
      firstValue = displayedNum;
    } else {
      if (displayedNum === "0") {
        display.textContent = parseFloat(keyContent);
      } else if (results) {
        display.textContent = parseFloat(keyContent);
        if (secondText.textContent == null) {
          secondText.textContent = results;
        } else {
          thirdText.textContent = secondText.textContent;
          secondText.textContent = results;
        }
        firstValue = null;
        secondValue = null;
        operator = null;
        results = null;
      } else {
        display.textContent = displayedNum + parseFloat(keyContent);
      }
    }
  } else if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    firstValue = displayedNum;
    operator = action;
    display.textContent = 0;
  } else if (action === "decimal") {
    display.textContent = displayedNum + ".";
  } else if (action === "pourcentage") {
    display.textContent = displayedNum / 100;
  } else if (action === "clear") {
    secondText.textContent = thirdText.textContent = null;
    display.textContent = 0;
  } else if (action === "delete") {
    display.textContent = displayedNum.slice(0, -1);
  } else if (action === "calculate") {
    secondValue = displayedNum;
    results = calculate(firstValue, operator, secondValue);
    display.textContent = results;
  }
}

const calculate = (n1, operator, n2) => {
  let result = "";
  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
};
