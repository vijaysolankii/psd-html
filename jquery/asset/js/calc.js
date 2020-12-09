// Task-3 calc
/*
Working of Calc.

    what is GetHistory ?
    what is PrintHistory ?

    what is GetOUtput ?
    what is PrintOUtput ?

    what is GetFormatedNumber ?
    what is reverseNumberFormat ?
 */

 
// Getting and Setting Data of History
function getHistory() { return document.getElementById("history-value").innerText; }
function printHistory(num) { document.getElementById("history-value").innerText = num; }

// Getting and Setting Data of Output
function getOutput() { return document.getElementById("output-value").innerText; }
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

// Manage output with commas | ","
function getFormattedNumber(num) {
    if (num == "-") { return ""; }
    var n = new Number(num);
    var value = n.toLocaleString("en");
    return value;
}
// return output without ","
function reverseNumberFormat(num) { return Number(num.replace(/,/g, "")); }

// Operations
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        // alert("you clicked this operator: "+this.id) //accessing the id where class is operator
        if (this.id == "clear") {
            printHistory(""); printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1)
                printOutput(output)
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

// Numbers
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        // alert("you clicked this number: "+this.id) //accessing the id where class is number
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            // if output is number
            output = output + this.id;
            printOutput(output);
        }
    });
}


// calculator using OOP aaproach.


// Define Class
class Calculator {

    // define constructor and assigning values to current and previous operand.
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear();
    } //done

    // clear calc Data and diffrent elements.
    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    } //done

    // when user enter any number appended to the current state.
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    } //done

    // choose operation from existing operator.
    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") { this.result() }
        this.operation = operation
        this.previousOperand = this.currentOperand;
        this.currentOperand = ""
    } //Done


    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    } //done

    // generating result and compute result.
    result() {
        let compute;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case "+":
                compute = prev + current;
                break
            case "-":
                compute = prev - current;
                break
            case "*":
                compute = prev * current;
                break
            case "/":
                compute = prev / current;
                break
            case "%":
                compute = prev % current;
                break
            default:
                return
        }
        // resetting value after computation
        this.currentOperand = compute
        this.previousOperand = ""
        this.operation = undefined
    } //done

    // updating result from current state.
    updateResult() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        }else{
            this.previousOperandTextElement.innerText = ""
        }
    } //done

    // delete calc Data & removing single element from current/previous state.
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
     } //Done
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateResult()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateResult()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.result()
    calculator.updateResult()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateResult()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateResult()
})