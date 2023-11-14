document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const nav = document.getElementById("nav");

  mobileMenuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
