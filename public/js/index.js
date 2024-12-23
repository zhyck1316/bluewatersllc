// Dropdown Menu Toggle
const dropdownButton2 = document.getElementById("dropdown-button2");
const dropdownMenu2 = document.getElementById("dropdown-menu2");

dropdownButton2.addEventListener("click", () => {
  dropdownMenu2.classList.toggle("hidden");
});

// Hamburger Menu Toggle
const hamburgerButton = document.querySelector("[data-collapse-toggle='navbar-sticky']");
const navbarSticky = document.getElementById("navbar-sticky");

hamburgerButton.addEventListener("click", () => {
  navbarSticky.classList.toggle("hidden");
});
