const menu_toggle = document.getElementById("menu-toggle");
const header_nav = document.getElementById("header-nav");
const header_buttons = document.getElementById("header-buttons");

menu_toggle.addEventListener("click", () => {
  header_nav.style.display = header_nav.style.display === "flex" ? "none" : "flex";
  header_buttons.style.display = header_buttons.style.display === "flex" ? "none" : "flex";
});
