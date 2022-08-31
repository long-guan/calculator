const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', function() {
    if (input.innerHTML.indexOf('<') != -1) {
        input.innerHTML = input.innerHTML.slice(0, input.innerHTML.indexOf("<"));
    } else {
        input.innerHTML = input.innerHTML.slice(0, -1);
    }
})

const seven = document.querySelector("#seven");
seven.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "7";
})

const eight = document.querySelector("#eight");
eight.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "8";
})

const nine = document.querySelector("#nine");
nine.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "9";
})

const divide = document.querySelector("#divide");
divide.addEventListener('click', function() {
    inputOperation('÷');
})

// add negative sign to expression if there is a second number
// add negative to the single number
const plusOrMinus = document.querySelector("#plusOrMinus");
plusOrMinus.addEventListener('click', function() {
    if (input.innerHTML.length == 0) {
        input.innerHTML = "-";
        console.log('check');
    } else if (input.innerHTML.indexOf('<')) { // won't add sign if there is a square in the expression
        // do nothing
    } else if (input.innerHTML.indexOf("√") != -1) { // won't add negative sign if there is a square root in the expression
        // do nothing
    } else if (checkOperation() == true && input.innerHTML[input.innerHTML.length - 1] >= 0 && input.innerHTML[input.innerHTML.length - 1] <= 9) {
        // do nothing
    } else if (checkOperation() == true) {
        console.log('true');
        input.innerHTML = input.innerHTML + '-'
    } else if (input.innerHTML[0] == '-') {
        input.innerHTML = input.innerHTML.slice(1, input.length);
        console.log('check');
    } else if (checkOperation() == false) {
        console.log('false');
        input.innerHTML = "-" + input.innerHTML;
    }
})

const four = document.querySelector("#four");
four.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "4";
})

const five = document.querySelector("#five");
five.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "5";
})

const six = document.querySelector("#six");
six.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "6";
})

const multiply = document.querySelector("#multiply");
multiply.addEventListener('click', function() {
    inputOperation('x');
})

const root = document.querySelector("#root");
root.addEventListener('click', function() {
    if (input.innerHTML.length == 0) {
        input.innerHTML = "√";
        console.log('check');
    } else if (checkOperation() == true && input.innerHTML[input.innerHTML.length - 1] >= 0 && input.innerHTML[input.innerHTML.length - 1] <= 9) {
        // do nothing
    } else if (checkOperation() == true) {
        console.log('true');
        input.innerHTML = input.innerHTML + '√'
    } else if (input.innerHTML[0] == '√') {
        input.innerHTML = input.innerHTML.slice(1, input.length);
        console.log('check');
    } else if (checkOperation() == false) {
        console.log('false');
        input.innerHTML = "√" + input.innerHTML;
    }
})

const one = document.querySelector("#one");
one.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "1";
})

const two = document.querySelector("#two");
two.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "2";
})

const three = document.querySelector("#three");
three.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "3";
})

const minus = document.querySelector("#minus");
minus.addEventListener('click', function() {
    inputOperation("−");
})

const squared = document.querySelector("#squared");
squared.addEventListener('click', function() {
    if (input.innerHTML.length == 0) { // don't input sign if nothing in input
        // do nothing
    } else if (input.innerHTML.indexOf('√') != -1) { // dont input sign if square root is in
        // do nothing
    } else if (checkOperation() == true && input.innerHTML[input.innerHTML.length - 1] >= 0 && input.innerHTML[input.innerHTML.length - 1] <= 9) { // do nothing is there is a sign in expression and the last index is a number
        // do nothing
    } else if (checkOperation() == true) { // don't add sign if there is sign
        // do nothing
    } else if (input.innerHTML[input.innerHTML.length - 1] == '>') {
        input.innerHTML = input.innerHTML.slice(0, input.innerHTML.indexOf("<"));
        console.log('check');
    } else if (checkOperation() == false) {
        console.log('false');
        input.innerHTML = input.innerHTML + "<sup>2</sup>";
    }
})

const zero = document.querySelector("#zero");
zero.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "0";
})

const decimal = document.querySelector("#decimal");
decimal.addEventListener('click', function() {
    if (input.innerHTML.slice(-1) == '.') {
        // do nothing
    } else {
        input.innerHTML = input.innerHTML + ".";
    }

})

const clear = document.querySelector("#clear");
clear.addEventListener('click', function() {
    input.innerHTML = "";
    output.innerHTML = "";
})

const plus = document.querySelector("#plus");
plus.addEventListener('click', function() {
    inputOperation("+");
})

const equal = document.querySelector("#equal");
equal.addEventListener('click', function() {
    if (checkSkip() == true) { // does not evaluate if expression is missing number
        // do nothing;
    } else {
        evaluate();
    }
});

const input = document.querySelector("#input");
const output = document.querySelector("#output");

function evaluate() {
    if (input.innerHTML.indexOf('+') != -1) {
        output.innerHTML = add();
    } else if (input.innerHTML.indexOf('−') != -1) {
        output.innerHTML = subtract();
    } else if (input.innerHTML.indexOf('x') != -1) {
        output.innerHTML = multiplication();
    } else if (input.innerHTML.indexOf('÷') != -1) {
        output.innerHTML = division();
    } else if (input.innerHTML.indexOf('√') != -1) {
        console.log('true');
        output.innerHTML = squareRoot();
    } else if (input.innerHTML.indexOf("<") != -1) {
        output.innerHTML = squareNum();
    }
}

function evaluateReturn() {
    if (input.innerHTML.indexOf('+') != -1) {
        return add();
    } else if (input.innerHTML.indexOf('−') != -1) {
        return subtract();
    } else if (input.innerHTML.indexOf('x') != -1) {
        return multiplication();
    } else if (input.innerHTML.indexOf('÷') != -1) {
        return division();
    } else if (input.innerHTML.indexOf('<') != -1) {
        return squareNum();
    }
}

// returns true if any of the signs are inputted
function checkOperation() {
    let signs = ['÷','x','−','+'];
    for (let i = 0; i <= signs.length + 1; i++) {
        if (input.innerHTML.indexOf(signs[i]) != -1) {
            console.log('true');
            return true;
        }
    }
    return false;
}

// returns true of the last index of the input is a sign
function checkSkip() {
    let signs = ['÷','x','−','+'];
    for (let i = 0; i <= signs.length + 1; i++) {
        if (input.innerHTML.slice(-1) == signs[i]) {
            console.log('true');
            return true;
        }
    }
    console.log('false');
    return false;
}

function add() {
    let plusSignIndex = input.innerHTML.indexOf('+');
    let num1 = input.innerHTML.slice(0, plusSignIndex);
    let num2 = input.innerHTML.slice(plusSignIndex + 1)
    console.log(num1);
    console.log(num2);
    return parseFloat(num1) + parseFloat(num2);
}

function subtract() {
    let minusSignIndex = input.innerHTML.indexOf('−');
    let num1 = input.innerHTML.slice(0, minusSignIndex);
    let num2 = input.innerHTML.slice(minusSignIndex + 1)
    return parseFloat(num1) - parseFloat(num2);
}

function multiplication() {
    let minusSignIndex = input.innerHTML.indexOf('x');
    let num1 = input.innerHTML.slice(0, minusSignIndex);
    let num2 = input.innerHTML.slice(minusSignIndex + 1)
    return parseFloat(num1) * parseFloat(num2);
}

function division() {
    let minusSignIndex = input.innerHTML.indexOf('÷');
    let num1 = input.innerHTML.slice(0, minusSignIndex);
    let num2 = input.innerHTML.slice(minusSignIndex + 1)
    return parseFloat(num1) / parseFloat(num2);
}

function squareRoot() {
    if (checkOperation() == false) { // if square rooting a single number
        let num1 = input.innerHTML.slice(1, (input.innerHTML.length));
        console.log(num1);
        return Math.sqrt(parseFloat(num1));
    }
}

function squareNum() {
    let num = input.innerHTML.slice(0, input.innerHTML.indexOf("<"));
    console.log(num);
    return parseFloat(num) * parseFloat(num);
}

// adds sign
function inputOperation(sign) {
    if (checkSkip() == true) { // won't add sign if there is already a sign in last index of the input
        // do nothing
    } else if (input.innerHTML.indexOf('<') != -1) { // won't add sign if there is a square sign in the expression
        // do nothing
    } else if (input.innerHTML.indexOf('√') != -1) { // won't add sign if there is already a square root in the expression
        // do nothing
    } else if (checkOperation() == true) { // evaluates expressiong and add sign
        input.innerHTML = evaluateReturn() + sign
        output.innerHTML = "";
    } else if (checkOperation() == false) { // add sign if there is no sign
        input.innerHTML = input.innerHTML + sign;
    } else if (input.innerHTML.length >= 2) { // use answer and first number and add sign
        input.innerHTML = output.innerHTML + sign;
        output.innerHTML = "";
        console.log('running');
    } else if (input.innerHTML.length == "") {
        // do nothing
    } else {
        input.innerHTML = input.innerHTML + sign;
    }
}
