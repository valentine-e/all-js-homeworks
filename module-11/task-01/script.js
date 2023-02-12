const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");
let changeColor = "";

startButton.addEventListener("click", onStartBtnClick);
stopButton.addEventListener("click", onStopBtnClick);

function changeBackgroundColor() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStartBtnClick() {
  changeBackgroundColor();
  changeColor = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
}

function onStopBtnClick() {
  clearInterval(changeColor);
  startButton.disabled = false;
}
