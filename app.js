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
    input.innerHTML = input.innerHTML + "÷";
})

const plusOrMinus = document.querySelector("#plusOrMinus");
plusOrMinus.addEventListener('click', function() {
    if (input.innerHTML[0] != "-") {
        input.innerHTML = "-" + input.innerHTML;
    } else {
        input.innerHTML = input.innerHTML.slice(1);
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
    input.innerHTML = input.innerHTML + "x";
})

const root = document.querySelector("#root");
root.addEventListener('click', function() {
    if (input.innerHTML[0] != "√") {
        input.innerHTML = "√" + input.innerHTML;
    } else {
        input.innerHTML = input.innerHTML.slice(1);
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
    input.innerHTML = input.innerHTML + "-";
})

const percent = document.querySelector("#percent");
// percent.addEventListener('click', function() {
//     input.innerHTML = input.innerHTML + "÷";
// })

const zero = document.querySelector("#zero");
zero.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "0";
})

const decimal = document.querySelector("#decimal");
decimal.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + ".";
})

const clear = document.querySelector("#clear");
clear.addEventListener('click', function() {
    input.innerHTML = "";
    output.innerHTML = "";
})

const plus = document.querySelector("#plus");
plus.addEventListener('click', function() {
    if (input.innerHTML.length > 2) {
        input.innerHTML = output.innerHTML + "+";
        output.innerHTML = "";
    } else {
        input.innerHTML = input.innerHTML + "+";
    }
})

const equal = document.querySelector("#equal");
equal.addEventListener('click', function() {
    if (input.innerHTML.indexOf('+') != -1) {
        output.innerHTML = add(input.innerHTML);
    } else if (input.innerHTML.indexOf('-') != -1) {
        output.innerHTML = subtract(input.innerHTML);
    }
})

const input = document.querySelector("#input");

const output = document.querySelector("#output");

function add(input) {
    let plusSignIndex = input.indexOf('+');
    let num1 = input.slice(0, plusSignIndex);
    let num2 = input.slice(plusSignIndex + 1)
    return parseInt(num1) + parseInt(num2);
}

function subtract(input) {
    let minusSignIndex = input.indexOf('-');
    let num1 = input.slice(0, minusSignIndex);
    let num2 = input.slice(minusSignIndex + 1)
    return parseInt(num1) - parseInt(num2);
}
