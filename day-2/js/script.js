
const area = 500;
let intervalTime = 2000;

let score = 0;


const moleImg = document.createElement('img');
document.body.appendChild(moleImg);
moleImg.src = 'https://toppng.com/uploads/thumbnail//monty-mole-11548526901pnjtfmgmvn.png'

moleImg.style.position = 'absolute';

moleImg.style.width = '100px';

moleImg.addEventListener('click', WhenMoleIsClicked)

function WhenMoleIsClicked() {
    score = score + 1;
    console.log(score);
    intervalTime = intervalTime - 50;
    clearInterval(interval);
    interval = setInterval(doLater, intervalTime);
}

function moveMole(x, y) {
    moleImg.style.left = x + 'px';
    moleImg.style.top = y + 'px';
}

function getRandomNumber(limit) {
    return Math.random() * limit;
}

moveMole(getRandomNumber(area),getRandomNumber (area));

getRandomNumber(10);

function doLater() {
    moveMole(getRandomNumber(area),getRandomNumber (area));
}

let interval = setInterval (doLater, intervalTime);
