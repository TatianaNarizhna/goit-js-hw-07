// Напиши скрипт который, при наборе текста в инпуте
//  input#name-input (событие input), подставляет его
//   текущее значение в span#name-output. Если инпут 
//   пустой, в спане должна отображаться 
// строка 'незнакомец'.


const refs = {
    inputEl: document.querySelector('input#name-input'),
    spanEl: document.querySelector('span#name-output'),
}

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange (event) {
    refs.spanEl.textContent = event.currentTarget.value;

}


