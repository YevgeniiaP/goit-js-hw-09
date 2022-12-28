function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

function onStartChangeColor() {
    setDisabled(btnStart);
    removeDisabled(btnStop);

    timerId = setInterval(changeColor, 1000);
};

function onStopChangeColor() {
    setDisabled(btnStop);
    removeDisabled(btnStart);
    clearInterval(timerId);
};

function changeColor() {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
};

function setDisabled(event) {
    event.setAttribute('disabled', 'disabled');
};

function removeDisabled(event) {
    event.removeAttribute('disabled');
};

btnStart.addEventListener('click', onStartChangeColor);
btnStop.addEventListener('click', onStopChangeColor);