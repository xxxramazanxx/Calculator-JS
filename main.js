// выбираем элементы с DOM 

const calcOut = document.querySelector('.calc-out');
const calculator = document.querySelector('.calc-box');
const btnClear = document.querySelector('.clear');

let firstNum = '';
let secondNum = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',  ','];

const action = ['-', '+','X', '/', '%'];

// очищает весь калькулятор
function clearAll () {
     firstNum = '';
     secondNum = '';
     sign = '';
     finish = false;
    calcOut.textContent = 0;
}
// кнопка очистки
btnClear.addEventListener('click', clearAll);


calculator.addEventListener('click', function (e) {
    // нажата не кнопка 
   if (!e.target.classList.contains('btn')) return;
   if (e.target.classList.contains('clear')) return;
   // очищаем экран
   calcOut.textContent = '';

   const key = e.target.textContent;
   // если нажата клавиша 0-9
   if(digit.includes(key)) {
    if(secondNum === '' && sign === '') {
            firstNum += key;
            calcOut.textContent = firstNum;
    }
    else if (firstNum!== '' && secondNum!== '' && finish) {
        secondNum = key;
        finish = false;
        calcOut.textContent = secondNum;
    }
    else {
        secondNum += key;
        calcOut.textContent = secondNum;
    }
    console.log(firstNum, secondNum, sign);
    return;
   }

   // если нажата клавиша мат. операции
   if(action.includes(key)) {
    sign = key;
    calcOut.textContent = sign;
    console.log(firstNum, secondNum, sign);
    return;
   }

   // нажата =

   if(key === '=') {
    if(secondNum === '') secondNum = firstNum;
    switch (sign) {
        case '+':
            firstNum = (+firstNum) + (+secondNum);
            break;
        case '-':
            firstNum = firstNum - secondNum;
            break;
        case 'X':
            firstNum = firstNum * secondNum;
            break;
        case '/':
            firstNum = firstNum / secondNum;
            break;
        case '%':
            firstNum = (firstNum / 100) * secondNum;
            break;
    }
    finish = true;
    calcOut.textContent = firstNum;

   }
})









