const modalBackg = document.querySelectorAll("#modal_background");

const aboutBtn = document.querySelector("#about_button");
const helpBtn = document.querySelector("#help_button");

const closeBtn = document.querySelectorAll("#close_window");
const modalWindows = document.querySelectorAll("#modal_window");


window.onclick = function (event) {
  if (event.target == modalBackg) {
    modalBackg.classList.remove("visible");
    modalBackg.classList.add("invisible");
  }
};

  aboutBtn.onclick = function () {
    if (modalBackg[0].classList.add("visible")) {
      modalBackg[0].classList.add("invisible");
      modalBackg[0].classList.remove("visible");
    } else {
      modalBackg[0].classList.remove("invisible");
      modalBackg[0].classList.add("visible");
    }
  };
  for (let index = 0; index < closeBtn.length; index++) {
    const element = closeBtn[index];
    element.onclick = function () {
      modalBackg[0].classList.remove("visible");
      modalBackg[0].classList.add("invisible");
    };
  }