

// event listeners

eventListeners();
function eventListeners() {
  const ui = new UI()
  // preloader
  window.addEventListener('load', function () {
    ui.hidePreloader();
  });

  // nav btn
  document.querySelector('.navBtn').addEventListener('click', function () {
    ui.showNav();
  });

  // control the video
  document.querySelector('.video__switch').addEventListener('click', function () {
    ui.videoControls();
  });

  // submit the form
  document.querySelector('.drink-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;

    let value = ui.checkEmpty(name, lastName, email);

    if (value) {
      ui.showFeedback('customer added to the list', 'success')
    }
    else {
      ui.showFeedback('some form values empty', 'error')
    }

  })
}

// constructor function
function UI() {
}

// hide preloader
UI.prototype.hidePreloader = function () {
  document.querySelector('.preloader').style.display = "none";
}
// show Nav
UI.prototype.showNav = function () {
  document.querySelector('.nav').classList.toggle('nav--show')
}
// play/pause the video
UI.prototype.videoControls = function () {
  let btn = document.querySelector('.video__switch-btn');
  if (!btn.classList.contains('btnSlide')) {
    btn.classList.add('btnSlide')
    document.querySelector('.video__item').pause()
  }
  else {
    btn.classList.remove('btnSlide')
    document.querySelector('.video__item').play()
  }
}

// check for empty values
UI.prototype.checkEmpty = function (name, lastname, email) {
  let result;
  if (name === '' || lastname === '' || email === '') {
    result = false;
  }
  else {
    result = true;
  }
  return result;
}

UI.prototype.showFeedback = function (text, type) {
  if (type === 'success') {
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('success');
    feedback.innerText = text;
    this.removeAlert('success')

  }
  else if (type === 'error') {
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('error');
    feedback.innerText = text;
    this.removeAlert('error')
  }
}

// remove alert
UI.prototype.removeAlert = function (type) {

  setTimeout(function () {
    document.querySelector('.drink-form__feedback').classList.remove(type)
  }, 3000)

}

// customer
function Customer(name, lastname, email) {
  this.name = name,
    this.lastname = lastname,
    this.email = email;
}