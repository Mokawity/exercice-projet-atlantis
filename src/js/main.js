var sidenav = document.querySelector(".sidenav");
var openBtn = document.querySelector(".btn");

openBtn.addEventListener("click", openNav);

var openNav = function () {
  sidenav.classList.toggle("active");
};
