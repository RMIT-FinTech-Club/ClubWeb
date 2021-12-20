// Page 1
let btn1 = document.querySelector('#squareBtn1');
let btn2 = document.querySelector('#squareBtn2');
let btn3 = document.querySelector('#squareBtn3');
let btn4 = document.querySelector('#squareBtn4');

let header = document.querySelector('#mainHeader1');

btn1.addEventListener('click', () => {
  header.innerText = 'BUSINESS DEPARTMENT';
});

btn2.addEventListener('click', () => {
  header.innerText = 'TECHNOLOGY DEPARTMENT';
});

btn3.addEventListener('click', () => {
  header.innerText = 'HR DEPARTMENT';
});

btn4.addEventListener('click', () => {
  header.innerText = 'MARKETING DEPARTMENT';
});

// Page 2
let avBtn1 = document.querySelector('#avBtn1');
let avBtn2 = document.querySelector('#avBtn2');
let avBtn3 = document.querySelector('#avBtn3');
let avBtn4 = document.querySelector('#avBtn4');
let avBtn5 = document.querySelector('#avBtn5');
let avBtn6 = document.querySelector('#avBtn6');
let avBtn7 = document.querySelector('#avBtn7');
let avBtn8 = document.querySelector('#avBtn8');

let positionIcon = document.getElementById('#avPosition');
let infoName = document.querySelector('#infoName');
let infoPosition = document.querySelector('#infoPosition');

avBtn1.addEventListener('click', () => {
  infoName.innerText = 'TIN QUAN CHUNG';
  infoPosition.innerText = 'HEAD OF TECHNOLOGY DEPARTMENT';
});

avBtn2.addEventListener('click', () => {
  infoName.innerText = 'SOMEONE';
  infoPosition.innerText = 'HEAD OF SOMETHING';
});
