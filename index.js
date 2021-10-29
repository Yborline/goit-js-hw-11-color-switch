const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intevalId = null;
let isActive = false;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector("body"),
  startButt: document.querySelector(`[data-action="start"]`),
  stopButt: document.querySelector('[data-action="stop"]')
}

refs.body.style.backgroundColor = localStorage.getItem('color')

refs.startButt.addEventListener('click', onStartButt);
refs.stopButt.addEventListener('click',onStopButt );

function onStartButt() {
    if (isActive) {
      return;
  };
  intervalColor()
    isActive = true;
  


}


function onStopButt() {
  clearInterval(intevalId);
  isActive = false

}

  function intervalColor() {
    
 

  intevalId = setInterval(() => {
 
   refs.body.style.backgroundColor  = colors[randomIntegerFromInterval(0, colors.length - 1)];

    localStorage.setItem('color',  refs.body.style.backgroundColor); ;

  }, 1000
  
  );
 }
