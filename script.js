// function toggleMenu() {
//   const icon = document.getElementById('hamburger-icon');
//   const menu = document.getElementById('menu');

//   hamburgerIcon.addEventListener('mouseover', showMenu);
// }

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
