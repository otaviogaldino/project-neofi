const menu_toggle = document.getElementById("menu-toggle");
const header_nav = document.getElementById("header-nav");
const header_buttons = document.getElementById("header-buttons");

menu_toggle.addEventListener("click", () => {
  header_nav.style.display = header_nav.style.display === "flex" ? "none" : "flex";
  header_buttons.style.display = header_buttons.style.display === "flex" ? "none" : "flex";
});

const plus_icon = document.querySelectorAll('.plus-icon');
const faq_answer = document.querySelectorAll('.faq-answer');

plus_icon.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    faq_answer[index].classList.toggle('active');
    icon.classList.toggle('active');
  });
});