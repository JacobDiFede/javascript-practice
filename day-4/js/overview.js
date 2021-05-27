const input = document.createElement('input');
document.body.appendChild(input);
console.log(input);
input.placeholder = 'type something';

input.addEventListener('keydown', function(event) {
    console.log('input', input.value);
    console.log(event);
    if(event.code === 'Enter') {
        whatShouldHappenOnSubmit();
    }
});


const submitButton = document.createElement('button');
document.body.appendChild(submitButton);
submitButton.innerText = 'Submit';

submitButton.addEventListener('click', whatShouldHappenOnSubmit);

const colorInput = document.createElement('input');
colorInput.type = 'color';
document.body.appendChild(colorInput);

colorInput.addEventListener('change', function() {
    console.log('test', colorInput.value);
    document.body.style.backgroundColor = colorInput.value;
});


function whatShouldHappenOnSubmit() {
    if(!input.value) {
        return;
    }

    if (input.value) {
        console.log('click', input.value);
        const li = document.createElement('li');
        document.body.appendChild(li);
        li.innerText = input.value;
        input.value = '';
        input.focus();
    }

};