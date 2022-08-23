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
})

const plus = document.querySelector("#plus");
plus.addEventListener('click', function() {
    input.innerHTML = input.innerHTML + "+";
})

const equal = document.querySelector("#equal");
equal.addEventListener('click', function() {

})

const input = document.querySelector("#input");

const output = document.querySelector("#output");
