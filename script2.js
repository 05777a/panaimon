//ナビ
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

function clearText() {
  var textForm = document.getElementById("form");
  textForm.value = '';
}
