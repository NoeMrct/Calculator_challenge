const calculator = document.querySelector(".content");
const display = document.querySelector(".first_text");
let secondText = document.querySelector(".second_text");
let thirdText = document.querySelector(".third_text");
let firstValue = null;
let secondValue = "";
let operator = null;
let results = null;

function buttonClick(e) {
  const key = e;
  const action = key.getAttribute("data-action");
  const keyContent = key.textContent;
  let displayedNum = display.textContent;
  if (!action) {
    if (!operator) {
      if (results) {
        thirdText.textContent = secondText.textContent;
        secondText.textContent = "= " + displayedNum;
        firstValue = null;
        operator = null;
        results = null;
        secondValue = "";
        display.textContent = "0";
        displayedNum = display.textContent;
      }
      if (displayedNum === "0") {
        display.textContent = parseFloat(keyContent);
      } else {
        display.textContent = displayedNum + parseFloat(keyContent);
      }
      firstValue = displayedNum;
    } else {
      display.textContent = displayedNum + parseFloat(keyContent);
      let value = parseFloat(keyContent);
      secondValue += value.toString();
    }
  } else if (action === "add") {
    if (results) {
      thirdText.textContent = secondText.textContent;
      secondText.textContent = "= " + displayedNum;
    }
    firstValue = displayedNum;
    operator = action;
    display.textContent = firstValue + " + ";
  } else if (action === "subtract") {
    if (results) {
      thirdText.textContent = secondText.textContent;
      secondText.textContent = "= " + displayedNum;
    }
    firstValue = displayedNum;
    operator = action;
    display.textContent = firstValue + " - ";
  } else if (action === "multiply") {
    if (results) {
      thirdText.textContent = secondText.textContent;
      secondText.textContent = "= " + displayedNum;
    }
    firstValue = displayedNum;
    operator = action;
    display.textContent = firstValue + " * ";
  } else if (action === "divide") {
    if (results) {
      thirdText.textContent = secondText.textContent;
      secondText.textContent = "= " + displayedNum;
    }
    firstValue = displayedNum;
    operator = action;
    display.textContent = firstValue + " / ";
  } else if (action === "decimal") {
    if (operator) {
      secondValue += ".";
    }
    display.textContent = displayedNum + ".";
  } else if (action === "pourcentage") {
    display.textContent = displayedNum / 100;
  } else if (action === "clear") {
    firstValue = null;
    secondValue = "";
    operator = null;
    results = null;
    secondText.textContent = thirdText.textContent = null;
    display.textContent = 0;
  } else if (action === "delete") {
    if (results) {
      firstValue = null;
      secondValue = "";
      operator = null;
      results = null;
      thirdText.textContent = "";
      secondText.textContent = "";
    }
    display.textContent = displayedNum.slice(0, -1);
  } else if (action === "calculate") {
    console.log(firstValue);
    console.log(secondValue);
    results = calculate(firstValue, operator, secondValue);
    thirdText.textContent = "";
    secondText.textContent = displayedNum;
    display.textContent = results;
    firstValue = null;
    secondValue = "";
    operator = null;
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
