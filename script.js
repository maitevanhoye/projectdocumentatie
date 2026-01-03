// Dropdown menu tonen/verbergen
const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

if (btn) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("opacity-100");
  });
}

// Fade-in animatie bij laden
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("opacity-0");
  document.body.classList.add("opacity-100");
});
