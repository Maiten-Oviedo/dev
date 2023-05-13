const navBar = document.querySelector("#navbar");
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
var body = document.querySelector("#body");

abrirMenu.addEventListener("click", ()=> {
  navBar.classList.add("visible");
});

cerrarMenu.addEventListener("click", funCerrarMenu);

function funCerrarMenu (){ 
  navBar.classList.add("invisible");
  setTimeout(() => {
    navBar.classList.remove("invisible");
  }, 1000);
  navBar.classList.remove("visible");
};