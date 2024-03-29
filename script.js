//https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
//https://flaviocopes.com/scrolling/
window.addEventListener("DOMContentLoaded", function() {
  // navbar

  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });

  // selectors
  var loaderWrapper = document.querySelector("#loaderWrapper");
  var sectionLoader = loaderWrapper.querySelector("#loader");
  var nikeLogo = sectionLoader.querySelector("img.nike");
  var teslaLogo = sectionLoader.querySelector("img.tesla");


  /* burger menu
  var burger = document.querySelector(".burger-menu");
  var menu = document.querySelector(".menu");
  /*

  /******** ANIMATION_CONTENT_LOADED ********/
  // Animation logo showed after 500 miliseconds
  setTimeout(function() {
    nikeLogo.classList.add("showed");
    teslaLogo.classList.add("showed");
  }, 500);

  //Burger menu
 

  disableScroll();

  // Loader
  // Fake loading 2s add after 2s hidden on element #loaderWrapper
  setTimeout(function() {
    loaderWrapper.classList.add("hidden");
    enableScroll();

    //remove the loaderwrapper after 500ms which is the end of the opacity transition
    setTimeout(function() {
      loaderWrapper.remove();
    }, 500);
  }, 2000);

  // subscribe scroll
  window.addEventListener("scroll", function(event) {
    var scroll = window.scrollY;
    var heightScreen = window.screen.height;
    console.log(
      "size of screen height :" + heightScreen + " position in page :" + scroll
    );
    if (scroll > 0 && scroll > 900) {
      console.log("do something");
    }
  });
});

function disableScroll() {
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
}

function enableScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
}
