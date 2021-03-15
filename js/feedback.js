const feedbackLink = document.querySelector(".button-stray");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".feedback-username");
const feedbackEmail = feedbackPopup.querySelector(".feedback-your-mail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-display");
    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
    } else {
        feedbackName.focus();
    }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-display");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
        evt.preventDefault();
        feedbackPopup.classList.add("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-display")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-display");
        feedbackPopup.classList.remove("modal-error");
      }
    }
  });