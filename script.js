var backspaceBtn = document.getElementById('backspace-btn');

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function calculate() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function clearResult() {
    document.getElementById('result').value = '';
}

backspaceBtn.addEventListener('click', function() {
    result.value = result.value.slice(0, -1);
});