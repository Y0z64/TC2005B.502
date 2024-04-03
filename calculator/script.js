let operations = "";

function addToOperationsBox(prop, component) {
  if (/^[0-9().]$/.test(prop)) {
    operations += prop;
  } else {
    operations += " " + prop + " ";
  }
  component.innerText = operations;
}

function resolve(component) {
  let operation = component.innerText;

  if (operation === "") {
    component.innerText("Nothing here");
    return;
  }

  operation = operation.replace(/x/g, "*");
  operation.replace();
  const result = eval(operation);

  operations = String(result);
  component.innerText = result;
}

function cancel(component) {
  component.innerText = "";
  operations = "";
}

//HTML structure
const calculator = document.getElementById("calculator");
const operationsBox = document.createElement("div");
const operatorButtons = document.getElementsByClassName("operator-button");
const numberButtons = document.getElementsByClassName("calc-button");
const sendButton = document.getElementById("send");
const cancelButton = document.getElementById("cancel");

//Content
operationsBox.classList.add("operations-box");
calculator.insertBefore(operationsBox, calculator.firstChild);

//Conections
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    if (
      button.id !== "cancel" &&
      button.id !== "send" &&
      button.id !== "rick-roll"&&
      (button.classList.contains("operator-button") ||
        button.classList.contains("calc-button"))
    ) {
      button.addEventListener("click", () => {
        addToOperationsBox(button.innerText, operationsBox);
      });
    }
  });
});

sendButton.onclick = function () {
  resolve(operationsBox);
  return false;
};

cancelButton.onclick = function () {
  cancel(operationsBox);
  return false;
}