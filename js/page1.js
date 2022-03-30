// Page 1
let btn1 = document.querySelector("#squareBtn1");
let btn2 = document.querySelector("#squareBtn2");
let btn3 = document.querySelector("#squareBtn3");
let btn4 = document.querySelector("#squareBtn4");

let header = document.querySelector("#mainHeader1");
let depContent = document.querySelector("#depContent");

btn1.addEventListener("click", () => {
  depImg.src = "./assets/images/dep-and-board/BUS.svg";
  header.innerText = "BUSINESS DEPARTMENT";
  depContent.innerText =
    'Business department is the department of "commitment" people that fully put their effort in supporting the club with both "market database", "Business training workshop", and "Executing new merch ideas.';
});

btn2.addEventListener("click", () => {
  depImg.src = "./assets/images/dep-and-board/TECH.svg";
  header.innerText = "TECHNOLOGY DEPARTMENT";
  depContent.innerText =
    "Professional, dedicated but also 𝐟𝐚𝐦𝐢𝐥𝐲-𝐥𝐢𝐤𝐞, our Technology Department aims to create an ideal environment for tech-heads to develop new connections with their fellow tech enthusiasts, as well as 𝐬𝐡𝐚𝐫𝐩𝐞𝐧 𝐭𝐡𝐞𝐢𝐫 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 through training workshops and internal projects.";
});

btn3.addEventListener("click", () => {
  depImg.src = "./assets/images/dep-and-board/HR.svg";
  header.innerText = "HR DEPARTMENT";
  depContent.innerText =
    "Through fun bonding activities, the HR department pulls individuals and departments together, just like 𝐟𝐚𝐦𝐢𝐥𝐲. Their care, attentiveness, and dependability provide a cozy and comfortable atmosphere between departments. For the members, they are both a companion and a supporter, always listening and helping everyone to grow together.";
});

btn4.addEventListener("click", () => {
  depImg.src = "./assets/images/dep-and-board/MK.svg";
  header.innerText = "MARKETING DEPARTMENT";
  depContent.innerText =
    "The Marketing Department is the avatar of FinTech Club RMIT Vietnam when in charge of managing social networking sites (Facebook, Instagram, LinkedIn) as well as writing content and designing images for posts. Besides, they plan and execute marketing campaigns for projects. This is a place for members to practice, learn skills in FinTech, and marketing, share experiences and stories in life and create wonderful memories with each other.";
});

// Page 2
let avBtn1 = document.querySelector("#avBtn1");
let avBtn2 = document.querySelector("#avBtn2");
let avBtn3 = document.querySelector("#avBtn3");
let avBtn4 = document.querySelector("#avBtn4");
let avBtn5 = document.querySelector("#avBtn5");
let avBtn6 = document.querySelector("#avBtn6");
let avBtn7 = document.querySelector("#avBtn7");
let avBtn8 = document.querySelector("#avBtn8");

let avatar = document.getElementById("avatar");
let avPosition = document.getElementById("avPosition");
let infoName = document.querySelector("#infoName");
let infoPosition = document.querySelector("#infoPosition");
let infoDepartment = document.querySelector("#infoDepartment");
let infoContact = document.querySelector("#infoContact");
let info = document.querySelector("#info");

avBtn1.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/Pres.svg";
  avPosition.src = "./assets/images/pre.png";
  infoName.innerText = " Nguyen Vu Cong Thang";
  infoPosition.innerText = "PRESIDENT";
  infoDepartment.innerText = "Software Engineering";
  infoContact.innerText = "s3918702@rmit.edu.vn";
  infoFact1.innerText = "● Studied at an International school for 10 years.";
  infoFact2.innerText = "● Spent the last 2 years of Highschool in America.";
  infoFact3.innerText =
    "● Hobbies: Arts, Arduino programming, Basketball, web development, smart contract programming.";
  infoFact4.innerText = "";
});

avBtn2.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/PresInternal.svg";
  avPosition.src = "./assets/images/i-v-pre.png";
  infoName.innerText = "Pham Duc Anh";
  infoPosition.innerText = "INTERNAL VICE PRESIDENT";
  infoDepartment.innerText = "Business";
  infoContact.innerText = "s3917936@rmit.edu.vn";
  infoFact1.innerText =
    "● Born in Thanh Hoa and got a chance to study internationally.";
  infoFact2.innerText = "● Currently studying in RMIT due to Covid.";
  infoFact3.innerText = "";
  infoFact4.innerText = "";
});

avBtn3.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/PresExternal.svg";
  avPosition.src = "./assets/images/e-v-pre.png";
  infoName.innerText = "Do Ngoc Phuong Khoa";
  infoPosition.innerText = "EXTERNAL VICE PRESIDENT";
  infoDepartment.innerText = "International Business";
  infoContact.innerText = "s3928201@student.rmit.edu.au";
  infoFact1.innerText =
    "● Worked for many non-profit organizations in Vietnam.";
  infoFact2.innerText = "● Director at VietAbroader Club HCM.";
  infoFact3.innerText = "";
  infoFact4.innerText = "";
});

avBtn4.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/CFO.svg";
  avPosition.src = "./assets/images/cfo.png";
  infoName.innerText = "Nguyen Vu Nhat Ha";
  infoPosition.innerText = "CFO";
  infoDepartment.innerText = "Digital Business";
  infoContact.innerText = "s3836586@rmit.edu.vn";
  infoFact1.innerText =
    "● Used to attend some clubs at RMIT such as MarCom, Volleyball club as secretary, English Club as Operation member.";
  infoFact2.innerText = "";
  infoFact3.innerText = "";
  infoFact4.innerText = "";
});

avBtn5.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/HeadTech.svg";
  avPosition.src = "./assets/images/head-tech.png";
  infoName.innerText = "Dinh Hoang Anh Duong";
  infoPosition.innerText = "HEAD OF TECHNOLOGY";
  infoDepartment.innerText = "Robotics Engineering";
  infoContact.innerText = "s3927212@rmit.edu.vn";
  infoFact1.innerText = "● Studied at Nguyen Thuong Hien high school.";
  infoFact2.innerText = "● 2-year experience at Chairman.";
  infoFact3.innerText =
    "● Hobbies: Reading, Trading, Arduino Programming, Anime.";
  infoFact4.innerText = "";
});

avBtn6.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/HeadBus.svg";
  avPosition.src = "./assets/images/head-bus.png";
  infoName.innerText = "Nguyen Cu An Khang";
  infoPosition.innerText = "HEAD OF BUSINESS";
  infoDepartment.innerText = "Economics and Finance";
  infoContact.innerText = "s3864152@rmit.edu.vn";
  infoFact1.innerText = "● 50% RMIT scholarship.";
  infoFact2.innerText =
    "● Spent 1 year in participating in almost all business case competition.";
  infoFact3.innerText =
    "● Usually research about the potential of Vietnamese stock in semester break.";
  infoFact4.innerText =
    "● Hobbies: Arts, Trading card games, Stocks/Crypto, Reading, Music.";
});

avBtn7.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/HeadMK.svg";
  avPosition.src = "./assets/images/head-mk.png";
  infoName.innerText = "Tran Hoang Ny";
  infoPosition.innerText = "HEAD OF MARKETING";
  infoDepartment.innerText = "Digital Business";
  infoContact.innerText = "s3891420@rmit.edu.vn";
  infoFact1.innerText =
    "● A sporty person who loves to go running  and swimming to help maintain body health, increasing work productivity.";
  infoFact2.innerText =
    "● Hobbies: Traveling, Listening to music, discovering scientific mysteries.";
  infoFact3.innerText = "";
  infoFact4.innerText = "";
});

avBtn8.addEventListener("click", () => {
  avatar.src = "./assets/images/dep-and-board/HeadHR.svg";
  avPosition.src = "./assets/images/head-hr.png";
  infoName.innerText = "Vanessa Weinhold Yasmine";
  infoPosition.innerText = "HEAD OF HR";
  infoDepartment.innerText = "Professional Communication";
  infoContact.innerText = "s3865196@rmit.edu.vn";
  infoFact1.innerText = "● 5 years as a designer in the automotive industry.";
  infoFact2.innerText = "● Love trying out new things.";
  infoFact3.innerText = "● Unpredictable.";
  infoFact4.innerText =
    "● Currently on a spiritual journey, practicing yoga and heels, exploring the culture and shooting on the streets of Saigon among others.";
});
