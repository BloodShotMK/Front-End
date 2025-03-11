// Seleccionar el botón y el menú
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Evento para mostrar/ocultar el menú
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
