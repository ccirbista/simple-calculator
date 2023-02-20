const calculatorScreen = document.querySelector('#calculator-screen');
calculatorScreen.textContent = '';

let value1, value2;
let operatorClicked = false;
let operatorValue;

const oneButton = document.querySelector('#number-one');
oneButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('1');
});

const twoButton = document.querySelector('#number-two');
twoButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('2');
    //value = Number(calculatorScreen.textContent);
});

const threeButton = document.querySelector('#number-three');
threeButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('3');
    //value = Number(calculatorScreen.textContent);
});

const fourButton = document.querySelector('#number-four');
fourButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('4');
    //value = Number(calculatorScreen.textContent);
});


const fiveButton = document.querySelector('#number-five');
fiveButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('5');
    //value = Number(calculatorScreen.textContent);
});

const sixButton = document.querySelector('#number-six');
sixButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('6');
    //value = Number(calculatorScreen.textContent);
});

const sevenButton = document.querySelector('#number-seven');
sevenButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('7');
    //value = Number(calculatorScreen.textContent);
});

const eightButton = document.querySelector('#number-eight');
eightButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('8');
    //value = Number(calculatorScreen.textContent);
});

const nineButton = document.querySelector('#number-nine');
nineButton.addEventListener('click', () => {
    calculatorScreen.textContent = calculatorScreen.textContent.concat('9');
    //value = Number(calculatorScreen.textContent);
});

const zeroButton = document.querySelector('#number-zero');
zeroButton.addEventListener('click', () => { 
    calculatorScreen.textContent = calculatorScreen.textContent.concat('0');
    //value = Number(calculatorScreen.textContent);
});


const clearButton = document.querySelector('#clear-icon');
clearButton.addEventListener('click', () => {
    calculatorScreen.textContent = '';
});



const addButton = document.querySelector('#plus-icon');
addButton.addEventListener('click', () => {
    operatorValue = 'add';
    value1 = Number(calculatorScreen.textContent);
    calculatorScreen.textContent = '';

});

const subtractButton = document.querySelector('#minus-icon');
subtractButton.addEventListener('click', () => {
    operatorValue = 'subtract';
    value1 = Number(calculatorScreen.textContent);
    calculatorScreen.textContent = '';

});

const multiplyButton = document.querySelector('#multiply-icon');
multiplyButton.addEventListener('click', () => {
    operatorValue = 'multiply';
    value1 = Number(calculatorScreen.textContent);
    calculatorScreen.textContent = '';

});

const divideButton = document.querySelector('#division-icon');
divideButton.addEventListener('click', () => {
    operatorValue = 'divide';
    value1 = Number(calculatorScreen.textContent);
    calculatorScreen.textContent = '';

});

const equalsButton = document.querySelector('#equals-to-row');
equalsButton.addEventListener('click', () => {
    value2 = Number(calculatorScreen.textContent);
    let result = operate(operatorValue, value1, value2);
    calculatorScreen.textContent = result;
});

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    if(operator == 'add'){
        return add(a, b);
    }
    else if(operator == 'subtract'){
        return subtract(a, b);
    }
    else if(operator == 'multiply'){
        return multiply(a, b);
    }
    else if(operator == 'divide'){
        return divide(a, b);
    }
}