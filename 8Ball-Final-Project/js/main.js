const randomImage = [];
randomImage[0] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_1.png";
randomImage[1] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_2.png";
randomImage[2] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_3.png";
randomImage[3] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_4.png";
randomImage[4] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_5.png";
randomImage[5] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_6.png";
randomImage[6] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_7.png";
randomImage[7] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_8.png";
randomImage[8] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_9.png";
randomImage[9] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_10.png";
randomImage[10] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_11.png";
randomImage[11] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_12.png";
randomImage[12] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_13.png";
randomImage[13] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_14.png";
randomImage[14] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_15.png";
randomImage[15] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_16.png";
randomImage[16] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_17.png";
randomImage[17] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_18.png";
randomImage[18] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_19.png";
randomImage[19] = "https://raw.githubusercontent.com/vinferno/js-intro-5-17-21/master/magic%20(1)/magic8ball_20.png";

const decimal = Math.random();
const mixedNumber = decimal * 19;
const integer = Math.floor(mixedNumber);
const index = randomImage[integer];
const answer = document.getElementById("answers");

const questionButton = document.querySelector('#sendQuestion');

questionButton.addEventListener( 'click', () => {
    var img = document.createElement("img");
    img.src = (index);
    var src = document.getElementById("answers");
    src.appendChild(img);
    const questionLog = question.value;
    console.log(questionLog);
});