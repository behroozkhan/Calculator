// Variable declarations and assignments.
let displayDom = document.querySelectorAll("#display")[0]
let backSpaceBtn = document.querySelectorAll(".back-space")[0];
let operator, num1 = "", num2 = "";

// This function updates the displayed value of the calculator based on the user's input.
function num(numParameter) {
    if (operator) {
        num2 = num2 + numParameter;
        displayDom.value = Number(num1) + operator + Number(num2);
    }

    else {
        num1 = num1 + numParameter;
        displayDom.value = Number(num1);

    }
}
//This Function Set operator and Update display.
function setOperator(oprParameter) {
    operator = oprParameter;
    if (num1 === "") {
        displayDom.value = operator;
    } else {
        displayDom.value = Number(num1) + operator;
    }
}

//This Function Performs calculation based on operator.
function calculate(result) {
    switch (operator) {
        case "+":
            result = Number(num1) + Number(num2);
            break;
        case "-":
            result = Number(num1) - Number(num2);
        case "×":
            result = Number(num1) * Number(num2);
            break;
        case "÷":
            result = Number(num1) / Number(num2);
            break;
        case "%":
            result = Number(num1) % Number(num2);
            break;
        case "√x":
            result = Math.sqrt(num1);
            break;
    }
    displayDom.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
    console.log(result);
}

//This event and Function Define backspace button functionality.
backSpaceBtn.addEventListener('click', function () {
    if (operator) {
        num2 = num2.slice(0, -1);
    } else {
        num1 = num1.slice(0, -1);
    }

    displayDom.value = displayDom.value.slice(0, -1);
});

// This function clears all the calculator's data and display.
function clearAll() {
    operator = undefined;
    num1 = "0";
    num2 = "0";
    displayDom.value = "";
}

