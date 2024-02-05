
const mobileMenuBtn = document.querySelector(".hamburger");
const mobileMenuDropdown = document.querySelector(".bottom-header");
const navOverlay = document.querySelector(".overlay");

mobileMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  mobileMenuDropdown.classList.toggle("active");
  navOverlay.classList.toggle("active");
  mobileMenuBtn.classList.toggle("cross");

  // Toggle a class on the body to handle overflow
  document.body.classList.toggle("no-scroll", mobileMenuDropdown.classList.contains("active"));
}
const inputField = document.getElementById("search-input");
const closeBtn = document.querySelector('.close-btn');

inputField.addEventListener("click", showCloseBtn);

function showCloseBtn() {
    closeBtn.classList.add('active');
}

closeBtn.addEventListener("click", hideCloseBtn);

function hideCloseBtn() {
    closeBtn.classList.remove('active');
    inputField.value = '';
}





