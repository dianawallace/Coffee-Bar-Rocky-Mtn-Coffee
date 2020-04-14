// hide preloader
// all the images scripts links have finished loading

// window event listener

eventListeners();
function eventListeners() {
  const ui = new UI()

  window.addEventListener('load', function () {
    ui.hidePreloader();
  });

  // nav btn
  document.querySelector('.navBtn').addEventListener('click', function () {
    ui.showNav();
  });
}

function UI() {

}

UI.prototype.hidePreloader = function () {
  document.querySelector('.preloader').style.display = "none";
}
UI.prototype.showNav = function () {
  document.querySelector('.nav').classList.toggle('nav--show')
}
