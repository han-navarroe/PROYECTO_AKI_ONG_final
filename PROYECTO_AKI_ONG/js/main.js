const boton = document.getElementById("boton-menu");
const menu = document.getElementById("menu-principal");

boton.addEventListener("click", () => {
  menu.classList.toggle("active");
});