/*------------------------------TOGGLE------------------------------ */

var toggleContent = document.querySelector(".toggle-content");


toggleContent.addEventListener("click", ()=> {
  var toggle = document.querySelector(".toggle");
  var body = document.querySelector("#body");

  var header = document.querySelector("#header");
  var logo = document.querySelector(".logo");
  var menu = document.querySelectorAll(".navbar a");
  var interests = document.querySelectorAll("li");
  var contactTitle = document.querySelector("#form h3");
  var contactLabel = document.querySelectorAll(".field label");
  var contactInput = document.querySelector(".form-button");
  var contactNetworks = document.querySelectorAll(".contact-networks a");
  const abrirMenu = document.querySelector("#abrir-menu");
  const cerrarMenu = document.querySelector("#cerrar-menu");
  const navBar = document.querySelector("#navbar");
  const firstText = document.querySelector(".first-text");
  const animate = document.querySelector(".second-text");

  toggleContent.classList.toggle("toggle-content-active");
  toggle.classList.toggle("toggle-active");
  
  body.classList.toggle("body-active");

  header.classList.toggle("header-active");
  logo.classList.toggle("logo-active");

  menu.forEach(element => {
    element.classList.toggle("menu-active");
  });

  interests.forEach(element => {
    element.classList.toggle("li-active");
  });

  contactTitle.classList.toggle("title-active");

  contactLabel.forEach(element => {
    element.classList.toggle("label-active");
  });

  contactInput.classList.toggle("input-active");

  contactNetworks.forEach(element => {
    element.classList.toggle("network-active");
  });

  abrirMenu.classList.toggle("btn-active");
  cerrarMenu.classList.toggle("btn-active");
  navBar.classList.toggle("navbar-active");
  firstText.classList.toggle("first-text-active");
  animate.classList.toggle("second-text-active");

});

/*------------------ANIMATION HOME-------------*/

const secText = document.querySelector(".second-text");

const textLoad = ()=> {
  setTimeout(() => {
    secText.textContent = "HTML";
  }, 0);

  setTimeout(() => {
    secText.textContent = "CSS";
  }, 3000);
  
  setTimeout(() => {
    secText.textContent = "Javascript";
  }, 6000);
  
  setTimeout(() => {
    secText.textContent = "React Js";
  }, 9000);

}

textLoad();
setInterval (textLoad, 12000);

/*-----------------EMAIL----------------*/ 

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_x41tw8l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
