const display = document.getElementById("display");
let currentValue = ""; // Last string typed before calculation.
let previousValue = ""; // String typed before press of operator button.
let operator = ""; // Is defined with press of operator button. 
let result = ""; // Calculated float number after calculation.
let activeOperator = ""; // To track which operator button to style.

buttons.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const button = e.target;
        const input = button.textContent;
        if (button.classList == "number") {
            if (display.innerHTML === "0") {
                display.innerHTML = input;
            } else {
                display.innerHTML += input;
                currentValue = display.innerHTML;
            }
        }
        if (button.classList == "operator") {
            operator = input;
            previousValue = display.innerHTML;
            display.innerHTML = ""; 
            if (previousValue !== "") {
                activeOperator = e.target;
                activeOperator.style.backgroundColor = "#ebcb8b";
            }  
        }
        if (button.id == "decimal") {
            if (!display.innerHTML.includes(".")) {
                display.innerHTML += ".";
            }
        }
        if (button.id == "equals") {
            calculate(previousValue, operator, currentValue);
            activeOperator.style.backgroundColor = "#fff";
        }
        if (button.id == "clear") {
            currentValue = "";
            previousValue = "";
            operator = "";
            result = "";
            display.innerHTML = "0";
            activeOperator.style.backgroundColor = "#fff";
        }
    }
});

function calculate(num1, operator, num2) {
    if (operator == "+") {
        result = parseFloat(num1) + parseFloat(num2);
        display.innerHTML = result;
    } else if (operator == "-") {
        result = parseFloat(num1) - parseFloat(num2);
        display.innerHTML = result;
    } else if (operator == "x") {
        result = parseFloat(num1) * parseFloat(num2);
        display.innerHTML = result;
    } else if (operator == "/") {
        result = parseFloat(num1) / parseFloat(num2);
        display.innerHTML = result;
    }
}