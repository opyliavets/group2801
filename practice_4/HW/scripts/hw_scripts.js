
// функция для первого задания по ДЗ, пользователь вводит числа после чего по клику на 
// Result получает результат. 

function check() {
    var number1 = parseInt(document.querySelector('#number1').value);
    var number2 = parseInt(document.querySelector('#number2').value);
    var number3 = parseInt(document.querySelector('#number3').value);
    var multiple = number1 * number2;
    var result = multiple + number3;
    alert(result)
}


// скрипт для второго задания по ДЗ, пользователь добавляет числа в массив 1 и массив 2
// и проверяет одинаковы ли они, или разные. 

var firstArrayVar = [];
var secondArrayVar = [];

function firstArray() {
    firstArrayVar.push(document.querySelector('.give-number').value);
}

function secondArray() {
    secondArrayVar.push(document.querySelector('.give-number2').value);
}

function checkit(firstArrayVar, secondArrayVar) {
    for (var i = 0; i < firstArrayVar.length||i < secondArrayVar.length; i++){
        if (firstArrayVar[i] === secondArrayVar[i]) {
            var final = 1;
        } else {
            var final = 0;
        }
    }
    if (final === 1) {
        alert('IT IS THE SAME')
    } else {
        alert('IT IS DIFFERENT')
    }
}