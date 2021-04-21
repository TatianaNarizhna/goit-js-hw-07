

const inputEl = document.querySelector('input#validation-input');
const inputDataLength = document.querySelector('[data-length]')

inputEl.addEventListener('blur', onInputBlur);



function onInputBlur (event) {
    // console.log(inputEl.value.length);
    
    if(event.currentTarget.value.length === Number(inputEl.dataset.length)) {

        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
        return;
        
        // inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
        // inputEl.classList.add ('invalid');
        
      
    }

 
}

// const inputRef = document.querySelector('#validation-input');

// // const addClassOnInput = () => inputRef.classList.add(inputRef.value.length === 6 ? 'valid' : 'invalid');

// const onInputBlur = () => {
//     inputRef.classList.remove(inputRef.classList.contains('invalid') ? 'invalid' : 'valid');
//     return addClassOnInput();
// }

// inputRef.addEventListener('blur', onInputBlur)