const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click", () => {
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
});
const day = document.querySelector(".day");

day.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  day.style.display = "none";
  night.style.display = "block";
});
const night = document.querySelector(".night");

night.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  night.style.display = "none";
  day.style.display = "block";
});

const preloader = document.querySelector(".pre-loader");
window.addEventListener("load", () => (preloader.style.display = "none"));


const conbtn = document.querySelector(".conbtn");
const navBtn1 = document.querySelector(".nav-btn1");
const navBtn2 = document.querySelector(".nav-btn2");
const navBtn4 = document.querySelector(".nav-btn4");
const navBtn5 = document.querySelector(".nav-btn5");

const about = document.querySelector(".row");
const skills = document.querySelector(".skills");
const services = document.querySelector(".services");
const contact = document.querySelector(".contact");

navBtn2.addEventListener('click',() =>{
about.classList.remove("sec-dis")
services.classList.remove("sec-dis")

contact.classList.remove("sec-dis")
navBtn5.classList.remove("active")

navBtn1.classList.remove("active")
navBtn4.classList.remove("active")

navBtn2.classList.add("active")
skills.classList.add("sec-dis")
nav.classList.toggle("dis");
document.body.classList.toggle("overflow");

})
navBtn1.addEventListener('click', () => {
  about.classList.add("sec-dis")
  navBtn1.classList.add("active")
  navBtn4.classList.remove("active")
  contact.classList.remove("sec-dis")

  navBtn5.classList.remove("active")
  services.classList.remove("sec-dis")
  navBtn2.classList.remove("active")
  skills.classList.remove("sec-dis")
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");

})
navBtn4.addEventListener('click', () => {
  about.classList.remove("sec-dis")
  navBtn1.classList.remove("active")
  navBtn4.classList.add("active")
  contact.classList.remove("sec-dis")

  navBtn5.classList.remove("active")
  services.classList.add("sec-dis")
  navBtn2.classList.remove("active")
  skills.classList.remove("sec-dis")
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");

})
navBtn5.addEventListener('click', () => {
  about.classList.remove("sec-dis")
  navBtn1.classList.remove("active")
  navBtn4.classList.remove("active")
  contact.classList.add("sec-dis")

  navBtn5.classList.add("active")
  services.classList.remove("sec-dis")
  navBtn2.classList.remove("active")
  skills.classList.remove("sec-dis")
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");

})
conbtn.addEventListener('click', () => {
  about.classList.remove("sec-dis")
  navBtn1.classList.remove("active")
  contact.classList.add("sec-dis")
  navBtn5.classList.add("active")

});




const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["San", "no system is safe!", "aim for the impossible"];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
