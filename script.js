

var burger = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu')
burger.addEventListener('click', function() {
  burger.classList.toggle('is-click');
  menu.classList.toggle('menu-open')
})



