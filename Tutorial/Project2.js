const prompt = require("prompt-sync")()

const number1 = parseFloat(prompt("Enter Number 1: "))
const number2 = parseFloat(prompt("Enter Number 2: "))
const operator = prompt("Enter Operator: ")

let result;
switch (operator) {
    case "+":
        result = number1 + number2
        break;
    case "-":
        result = number1 - number2
        break;
    case "*":
        result = number1 * number2
        break;
    case "/":
        result = number1 / number2
        break;
    default:
        console.log("Invalid Operator")
        result = false;
        break;
}

if(result) 
    console.log(number1, operator, number2, "=", result)