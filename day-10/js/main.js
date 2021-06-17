let myNewElement;
if (new Date().getHours() > 5 && new Date().getDay() === 3) {
    myNewElement = document.createElement('div');
} else {
    myNewElement = document.createElement('li');
}

switch(new Date().getHours()) {
    case 0:
        console.log('midnight');
    break;
    case 1:
        console.log('1');
    break;
    case 2:
        console.log('2');
    break;
    default : 
        console.log('another time not one of the above')
}
console.log(new Date().getHours());

function hulk() {
    this.style.color = 'green'
    const beforeValue = parseInt(this.style.fontSize) || 20;
    this.style.fontSize = beforeValue + 20 + 'px';
}

// myNewElement.addEventListener('click', hulk);
document.body.appendChild(myNewElement);
myNewElement.innerHTML = 'I am a new element';
myNewElement.classList.add('bigParagraphs');

const elements = document.querySelectorAll('.bigParagraphs');
elements.forEach( element => {
    element.addEventListener('click', hulk);
});
