const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

const change = () => [nav, back].forEach(e => e.classList.toggle("active"));
document.onkeydown = e => {
    if (e.key == 'Escape' && nav.classList.contains("active")) change();
};