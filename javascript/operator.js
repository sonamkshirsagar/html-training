function operator() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result = (number1 > number2) ? number1 + 'is greater than' + number2 : number2 + 'is greater than' + number1;
    document.getElementById('result').innerHTML= result;

}
function less() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result = (number1 < number2) ? number1 + 'is less than' + number2 : number2 + 'is less than' + number1;
    document.getElementById('result').innerHTML= result;

}
function equal() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result = (number1 == number2) ? number1 + 'is equal than' + number2 : number2 + 'is equal than' + number1;
    document.getElementById('result').innerHTML= result;

}
function notequal() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result = (number1 != number2) ? number1 + 'is not equal than' + number2 : number2 + 'is not equal than' + number1;
    document.getElementById('result').innerHTML= result;

}

