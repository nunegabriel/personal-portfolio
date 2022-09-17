const hamburger = document.getElementById('menu-bars');
const curtain = document.getElementById('overlay');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const navItems = [nav1, nav2, nav3];

function trigger() {
  hamburger.classList.toggle('change');
  curtain.classList.toggle('overlay-active');
  if (curtain.classList.contains('overlay-active')) {
    curtain.classList.replace('overlay-slide-left', 'curtain-out');
  } else {
    curtain.classList.replace('curtain-out', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

hamburger.addEventListener('click', trigger);
navItems.forEach((trig) => {
  trig.addEventListener('click', trigger);
});
