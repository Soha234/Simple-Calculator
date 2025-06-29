const currentDisplay = document.getElementById("current-operand");
const previousDisplay = document.getElementById("previous-operand");

let currentValue = "0";
let previousValue = "";
let operation = null;

function updateDisplay(){
    currentDisplay.textContent = currentValue;
    previousDisplay.textContent = previousValue;
}

function appendToDisplay(number) {
    if(currentValue === "0" && number !== ".") {
        currentValue = "";
    }

    if(number === "." && currentValue.includes(".")) return;

    currentValue += number;

    updateDisplay();
}

function chooseOperation(op){
    if(currentValue === "") return;

    if(previousValue !== ""){
        calculate();
    }

    operation = op;

    previousValue = `${currentValue} ${operation}`;

    currentValue = "";

    updateDisplay();
}

function calculate(){
    let result;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if(isNaN(prev)) return;

    if(operation === "+") result = prev + current;
     else if(operation === "-") result = prev - current;
     else if(operation === "x") result = prev * current;
     else if(operation === "/") result = prev / current;

    else return;

    currentValue = result.toString();

    operation = null;
    previousValue = "";
    updateDisplay();
}

function clearAll(){
    currentValue = "0";
    previousValue = "";
    operation = null;

    updateDisplay();
}

updateDisplay();