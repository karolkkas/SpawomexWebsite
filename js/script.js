/*eslint-disable*/
$(document).ready(function () {
  $(window).scroll(function () {
    var location = $(this).scrollTop();
    if (location < 70) {
      $('nav').removeClass('transparent');
      $('.arrow-up').removeClass('arrow-up--visible');
    } else {
      $('nav').addClass('transparent');
      $('.arrow-up').addClass('arrow-up--visible');
    }
  });

  var scrollLink = $('.scrollTo');
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

  $('.nav a').click(function () {
    $(".navbar-collapse").removeClass("in");
    $('body').removeClass("blocked");
  });

  $('.navbar-toggle').click(function () {
    $('body').toggleClass("blocked");
  });
});


(function validateForm() {
  const form = document.getElementById('contactForm');

  function showValid(input, isValid) {
    if (!isValid) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  }

  function validateTextInput(input) {
    let isValid = false;
    const regex = new RegExp('[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ]+(\-[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ]+)?', 'gi');
    if (regex.test(input.value)) {
      isValid = true;
    }
    showValid(input, isValid);
    return isValid;
  }

  function validateEmailInput(input) {
    let isValid = false;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
    if (regex.test(input.value)) {
      isValid = true;
    }
    showValid(input, isValid);
    return isValid
  }

  function validateTelInput(input) {
    let isValid = false;
    const regex = new RegExp('^([0-9]{3}(-|\s)?){2}[0-9]{3}$','gi');
    if (regex.test(input.value)) {
      isValid = true;
    }
    showValid(input, isValid);
    return isValid;
  }

  function checkTextarea(input) {
    if (input.value !== '') {
      showValid(input, true);
      return true;
    } else {
      showValid(input, false);
      return false;
    }
  }

  const addListeners = function () {
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('.form__textarea');

    [].forEach.call(inputs, function (input) {
      if (input.nodeName.toUpperCase() == 'INPUT') {
        const type = input.type.toUpperCase();
        if (type == 'TEXT') {
          input.addEventListener('keyup', function() {validateTextInput(input)});
          input.addEventListener('blur', function() {validateTextInput(input)});
        }
        if (type == 'EMAIL') {
          input.addEventListener('keyup', function() {validateEmailInput(input)});
          input.addEventListener('blur', function() {validateEmailInput(input)});
        }
        if (type == 'TEL') {
          input.addEventListener('keyup', function() {validateTelInput(input)});
          input.addEventListener('blur', function() {validateTelInput(input)});
        }
      }
    });

    textarea.addEventListener('keyup', function() {checkTextarea(this)});
    textarea.addEventListener('blur', function() {checkTextarea(this)});
  }

  const formSubmit = function() {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let validated = true;
        const inputs = form.querySelectorAll('input, .form__textarea');

        [].forEach.call(inputs, function(input) {
            if (input.nodeName.toUpperCase() == 'INPUT') {
                let type = input.type.toUpperCase();
                if (type == 'TEXT') {
                  if (!validateTextInput(input)) validated = false;
                }
                if (type == 'TEL') {
                  if (!validateTelInput(input)) validated = false;
                }
                if (type == 'EMAIL') {
                  if (!validateEmailInput(input)) validated = false;
                }
                if (type == 'TEXTAREA') {
                  if (!checkTextarea(input)) validated = false;
                }
              }
            });
            
        if (validated) {
            this.submit();
        } else {
            return false;
        }
    });
};
    addListeners();
    formSubmit();
})();