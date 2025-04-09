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
let plusminus = true;
container.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
        case "digit":
            screen.textContent += target.textContent;
            newNumber = Number(screen.textContent);
            console.log("digit");
            break;
        case "clear":
            console.log("cleared");
            screen.textContent = "";
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
            console.log("oldnumber: " + oldNumber);
            document.getElementById('clear').click();
            break;
        case "subtract":
            oldNumber = newNumber;
            currOperator = "-";
            console.log("oldnumber: " + oldNumber);
            document.getElementById('clear').click();
            break;
        case "multiply":
            oldNumber = newNumber;
            currOperator = "x";
            console.log("oldnumber: " + oldNumber);
            document.getElementById('clear').click();
            break;
        case "divide":
            oldNumber = newNumber;
            currOperator = "/";
            console.log("oldnumber: " + oldNumber);
            document.getElementById('clear').click();
            break;
        case "percent":
            currOperator = "/";
            newNumber = operator(Number(newNumber), currOperator, 10);
            console.log("oldnumber: " + newNumber);
            screen.textContent = newNumber;
            oldNumber = newNumber;
            break;
        case "plusminus":
            newNumber = -1 * newNumber;
            screen.textContent = newNumber;
            break;
        case "equal":
            console.log("equal");
            console.log("oldnumber: " + oldNumber + " newNumber" + newNumber);
            oldNumber = operator(Number(oldNumber), currOperator, Number(newNumber));
            screen.textContent = oldNumber;
            newNumber = oldNumber;
            console.log(screen.textContent);
            break;
    }
})
