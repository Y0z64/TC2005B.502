import "./style.css";

// HTML structure
const calculator = document.getElementById("calculator");
const operationsBox = document.createElement("div");


//Content
operationsBox.classList.add("ope")

//Conections
calculator.insertBefore(operationsBox, calculator.firstChild);

function addToOperationsBox(prop) {
  if (typeof prop === "number") {
    operationsBox.innerText += prop;
  } else {
    if (prop === "(" || prop === ")") {
      operationsBox.innerText += prop;
    } else {
      operationsBox.innerText += " " + prop + " ";
    }
  }
}

function resolve() {
  const operation = operationsBox.innerText;
  const result = eval(operation);
  operationsBox.innerText = result;
}


const operatorButtons = document.getElementsByClassName("operator-button");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    addToOperationsBox(operatorButtons[i].innerText);
  });
}