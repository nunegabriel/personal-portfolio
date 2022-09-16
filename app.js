const menuBars = document.getElementById('hamburger');
const curtain = document.getElementById('curtain');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const navList = [nav1, nav2, nav3];

function HamburgerMenu() {
  curtain.classList.toggle('CurTain');
  menuBars.classList.toggle('change');
  if (curtain.classList.contains('CurTain')) {
    curtain.classList.replace('curtain-anim', 'curtain-out');
  } else {
    curtain.classList.replace('curtain-out', 'curtain-anim');
  }
}

