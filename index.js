const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector("body"),
  startButt: document.querySelector(`[data-action="start"]`),
  stopButt: document.querySelector('[data-action="stop"]')
}

refs.startButt.addEventListener('click', onStartButt);
refs.stopButt.addEventListener('click', onStopButt);

let intervalId = null;

function onStartButt() {
  refs.startButt.disabled = true;
  intervalId = setInterval(changeBodyColor, 1000);
  return intervalId;
}
function onStopButt() {
  refs.startButt.disabled = false;
  clearInterval(intervalId);
}
function changeBodyColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

