// Счетчик состоит из спана и кнопок, которые
//  должны увеличивать и уменьшать значение 
//  счетчика на 1.

// // Создай переменную counterValue в которой
//  будет хранится текущее значение счетчика.
// // Создай функции increment и decrement для
//  увеличения и уменьшения значения счетчика
// // Добавь слушатели кликов на кнопки,
//  вызовы функций и обновление интерфейса

const targetBtnDec = document.querySelector('button[data-action="decrement"]');
const targetBtnIncr = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector('span');



targetBtnDec.addEventListener('click', decrement);

targetBtnIncr.addEventListener('click', increment);


function increment(event) {
     counterValue.textContent = Number(counterValue.textContent) + 1;

}

function decrement (event) {
    counterValue.textContent = Number(counterValue.textContent) - 1;

}

