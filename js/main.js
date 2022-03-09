(function () {
  "use strick";

  document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('home').addEventListener('click', scrollUp);
    document.getElementById('buttom-up').addEventListener('click', scrollUp);
    function scrollUp() {
      var currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 4));
      }
    }
    let buttonUp = document.getElementById('buttom-up');
    let bar = document.getElementById('barra');
    window.onscroll = function () {
      var scroll = document.documentElement.scrollTop;
      if (scroll > 100) {
        buttonUp.style.transform = "scale(1)";

      } else if (scroll < 100) {
        buttonUp.style.transform = "scale(0)";
      }
    }
  });//DOM CONTENT LOEADED
})();// Se ejecuta despues de que se cargo todo el codigo HTML
//menu movil
var menu = document.getElementById('menu-movil');
var prin = document.getElementById('nav-principal');
menu.addEventListener('click', cerrar
);
function cerrar() {
  prin.classList.toggle('show');
}
//scroll barra
$(window).scroll(function () {
  var scroll = $(window).scrollTop(),
    docheight = $(document).height(),
    winheigth = $(window).height();
  console.log(scroll);
  var scrolled = (scroll / (docheight - winheigth)) * 100;
  $('.scroll-line').css({ 'width': (scrolled + '%') });
});

$(function () {

  //programa conferencias
  $('.info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function () {
      $('.menu-programa a').removeClass('activo');
      $(this).addClass('activo');
      $('.info-curso').hide();//oculta a todos
      var enlace = $(this).attr('href');
      $(enlace).fadeIn(1000);//muestra con un delay/opacidad
      return false;
  });
  
});