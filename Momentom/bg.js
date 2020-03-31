const body = document.querySelector('body');

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/Momentom/images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);

    // const interval = setInterval(function() {
    //     const randomNumber = genRandom();
    //     paintImage(randomNumber);
    // }, 5000);
}

init();
