// Page 1
let btn1 = document.querySelector('#squareBtn1');
let btn2 = document.querySelector('#squareBtn2');
let btn3 = document.querySelector('#squareBtn3');
let btn4 = document.querySelector('#squareBtn4');

let header = document.querySelector('#mainHeader1');

btn1.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/BUS.svg';
  header.innerText = 'BUSINESS DEPARTMENT';
});

btn2.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/TECH.svg';
  header.innerText = 'TECHNOLOGY DEPARTMENT';
});

btn3.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/HR.svg';
  header.innerText = 'HR DEPARTMENT';
});

btn4.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/MK.svg';
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

let avatar = document.getElementById('avatar');
let avPosition = document.getElementById('avPosition');
let infoName = document.querySelector('#infoName');
let infoPosition = document.querySelector('#infoPosition');

avBtn1.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/Pres.svg'
  avPosition.src = '../assets/images/pre.png';
  infoName.innerText = 'PHAN LE MINH AN';
  infoPosition.innerText = 'PRESIDENT';
});

avBtn2.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/PresInternal.svg'
  avPosition.src = '../assets/images/i-v-pre.png';
  infoName.innerText = 'HUYNH PHUONG VY';
  infoPosition.innerText = 'INTERNAL VICE PRESIDENT';
});

avBtn3.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/PresExternal.svg'
  avPosition.src = '../assets/images/e-v-pre.png';
  infoName.innerText = 'NGUYEN CAO MINH DUC';
  infoPosition.innerText = 'EXTERNAL VICE PRESIDENT';
});

avBtn4.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/CFO.svg'
  avPosition.src = '../assets/images/cfo.png';
  infoName.innerText = 'HUYNH PHUONG VY';
  infoPosition.innerText = 'CFO';
});

avBtn5.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadTech.svg'
  avPosition.src = '../assets/images/head-tech.png';
  infoName.innerText = 'CHUNG QUAN TIN';
  infoPosition.innerText = 'HEAD OF TECHNOLOGY';
});

avBtn6.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadBus.svg'
  avPosition.src = '../assets/images/head-bus.png';
  infoName.innerText = 'VUONG ANH CHIEN';
  infoPosition.innerText = 'HEAD OF BUSINESS';
});

avBtn7.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadMK.svg'
  avPosition.src = '../assets/images/head-mk.png';
  infoName.innerText = 'DO PHUONG ANH';
  infoPosition.innerText = 'HEAD OF MARKETING';
});

avBtn8.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadHR.svg'
  avPosition.src = '../assets/images/head-hr.png';
  infoName.innerText = 'HUYNH PHUONG VY';
  infoPosition.innerText = 'HEAD OF HR';
});
