const container = document.querySelector(".container");
const screen = document.querySelector(".screen");

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operator(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}
let newNumber = 0;
let currOperator = "";
let oldNumber = "";

container.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
        case "digit":
            screen.textContent += target.textContent;
            newNumber = Number(screen.textContent);
            break;
        case "clear":
            console.log("cleared");
            screen.textContent = "0";
            if (screen.textContent == "") {
                newNumber = 0;
            }
            break;
        case "decimal":
            if (!screen.textContent.includes(".")) {
                screen.textContent += target.textContent;
            }
            break;
        case "add":
            oldNumber = newNumber;
            currOperator = "+";
            console.log("oldnumber" + oldNumber);
            document.getElementById('clear').click();
        case "equal":
            console.log("equal");
            screen.textContent = operator(Number(oldNumber), currOperator, Number(newNumber));
    }
    screen.textContent = newNumber;
})
