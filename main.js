const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");

  const isActive = navLinks.classList.contains("active");
  menuBtnIcon.setAttribute(
    "class",
    isActive ? "ri-close-line" : "ri-menu-line",
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("active");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const sr = ScrollReveal({
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  reset: false,
});

sr.reveal(".header-img img", {
  origin: "right",
});
sr.reveal(".header-content div", {
  duration: 1000,
  delay: 500,
});
sr.reveal(".header-content h1", {
  delay: 1000,
});
sr.reveal(".header-content p", {
  delay: 1500,
});
sr.reveal(".deals-card", {
  interval: 500,
});
sr.reveal(".about-img img", {
  origin: "right",
});
sr.reveal(".about-card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});