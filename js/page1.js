// Page 1
let btn1 = document.querySelector('#squareBtn1');
let btn2 = document.querySelector('#squareBtn2');
let btn3 = document.querySelector('#squareBtn3');
let btn4 = document.querySelector('#squareBtn4');

let header = document.querySelector('#mainHeader1');
let depContent = document.querySelector('#depContent');

btn1.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/BUS.svg';
  header.innerText = 'BUSINESS DEPARTMENT';
  depContent.innerText = 'Business department is the department of "commitment" people that fully put their effort in supporting the club with both "market database", "Business training workshop", and "Executing new merch ideas.';
});

btn2.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/TECH.svg';
  header.innerText = 'TECHNOLOGY DEPARTMENT';
  depContent.innerText = 'Professional, dedicated but also 𝐟𝐚𝐦𝐢𝐥𝐲-𝐥𝐢𝐤𝐞, our Technology Department aims to create an ideal environment for tech-heads to develop new connections with their fellow tech enthusiasts, as well as 𝐬𝐡𝐚𝐫𝐩𝐞𝐧 𝐭𝐡𝐞𝐢𝐫 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 through training workshops and internal projects.';
});

btn3.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/HR.svg';
  header.innerText = 'HR DEPARTMENT';
  depContent.innerText = 'Through fun bonding activities, the HR department pulls individuals and departments together, just like 𝐟𝐚𝐦𝐢𝐥𝐲. Their care, attentiveness, and dependability provide a cozy and comfortable atmosphere between departments. For the members, they are both a companion and a supporter, always listening and helping everyone to grow together.';
});

btn4.addEventListener('click', () => {
  depImg.src = '../assets/images/dep-and-board/MK.svg';
  header.innerText = 'MARKETING DEPARTMENT';
  depContent.innerText = 'The Marketing Department is the avatar of FinTech Club RMIT Vietnam when in charge of managing social networking sites (Facebook, Instagram, LinkedIn) as well as writing content and designing images for posts. Besides, they plan and execute marketing campaigns for projects. This is a place for members to practice, learn skills in FinTech, and marketing, share experiences and stories in life and create wonderful memories with each other.';
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
let infoDepartment = document.querySelector('#infoDepartment');
let infoContact = document.querySelector('#infoContact');
let info = document.querySelector('#info');

avBtn1.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/Pres.svg'
  avPosition.src = '../assets/images/pre.png';
  infoName.innerText = 'Vu Cong Thang';
  infoPosition.innerText = 'PRESIDENT';
  infoDepartment.innerText = 'Technology';
  infoContact.innerText = 's3918702@rmit.edu.vn';
});

avBtn2.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/PresInternal.svg'
  avPosition.src = '../assets/images/i-v-pre.png';
  infoName.innerText = 'Pham Duc Anh';
  infoPosition.innerText = 'INTERNAL VICE PRESIDENT';
  infoDepartment.innerText = 'Business';
  infoContact.innerText = 's3917936@rmit.edu.vn';
});

avBtn3.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/PresExternal.svg'
  avPosition.src = '../assets/images/e-v-pre.png';
  infoName.innerText = 'Do Ngoc Phuong Khoa';
  infoPosition.innerText = 'EXTERNAL VICE PRESIDENT';
  infoDepartment.innerText = 'International Business';
  infoContact.innerText = 's3928201@student.rmit.edu.au';
});

avBtn4.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/CFO.svg'
  avPosition.src = '../assets/images/cfo.png';
  infoName.innerText = 'Nguyen Vu Nhat Ha';
  infoPosition.innerText = 'CFO';
  infoDepartment.innerText = 'Digital Business';
  infoContact.innerText = 's3836586@rmit.edu.vn';
});

avBtn5.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadTech.svg'
  avPosition.src = '../assets/images/head-tech.png';
  infoName.innerText = 'Dinh Hoang Anh Duong';
  infoPosition.innerText = 'HEAD OF TECHNOLOGY';
  infoDepartment.innerText = 'Engineering';
  infoContact.innerText = 's3927212@rmit.edu.vn';
});

avBtn6.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadBus.svg'
  avPosition.src = '../assets/images/head-bus.png';
  infoName.innerText = 'Nguyen Cu An Khang';
  infoPosition.innerText = 'HEAD OF BUSINESS';
  infoDepartment.innerText = 'Economics and Finance';
  infoContact.innerText = 's3864152@rmit.edu.vn';
});

avBtn7.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadMK.svg'
  avPosition.src = '../assets/images/head-mk.png';
  infoName.innerText = 'Tran Hoang Ny';
  infoPosition.innerText = 'HEAD OF MARKETING';
  infoDepartment.innerText = 'Digital Business';
  infoContact.innerText = 's3891420@rmit.edu.vn';
});

avBtn8.addEventListener('click', () => {
  avatar.src = '../assets/images/dep-and-board/HeadHR.svg'
  avPosition.src = '../assets/images/head-hr.png';
  infoName.innerText = 'Vanessa Weinhold Yasmine';
  infoPosition.innerText = 'HEAD OF HR';
  infoDepartment.innerText = 'Professional Communication';
  infoContact.innerText = 's3865196@rmit.edu.vn';
});
