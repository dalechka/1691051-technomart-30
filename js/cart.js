const cartButtons = document.querySelectorAll(".catalog-button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");

for (cartButton of cartButtons) {
  cartButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-display");
  })
};

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-display");
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("modal-display")) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-display");
      }
    }
  });