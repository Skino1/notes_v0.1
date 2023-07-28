const menuBtn = document.querySelector("#menu_button");
const body = document.querySelector("#body_container");
const menuElements = document.querySelectorAll('#menu_element')
const menuIcons = document.querySelectorAll('#menu_icon')
const menuElTitle = document.querySelectorAll('#menu_element_title')
const menu = document.querySelector('#menu')

menuBtn.addEventListener("click", function () {
  if (body.classList.contains("grid-cols-[0.25fr_1fr]")) {
    body.classList.toggle("grid-cols-[0.25fr_1fr]");
    body.classList.toggle("grid-cols-[0.05fr_1fr]");
  } else {
    body.classList.toggle("grid-cols-[0.25fr_1fr]");
    body.classList.toggle("grid-cols-[0.05fr_1fr]");
  }
  for (let i = 0; i < menuElTitle.length; i++) {
    const element = menuElTitle[i];
        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
  }
    for (let i = 0; i < menuElements.length; i++) {
      const element = menuElements[i];
      if (element.classList.contains ("md:p-3")) {
        element.classList.toggle("md:p-5");
        element.classList.toggle("md:p-3");
      } else {
        element.classList.toggle("md:p-3");
        element.classList.toggle("md:p-5");
      }
    }
    if (menu.classList.contains("w-20")) {
      menu.classList.toggle("w-20")
      menu.classList.toggle("");
    } else {
      menu.classList.toggle("w-20")
      menu.classList.toggle("");
    }
});

menu.onclick = function (event) {
  if (event.target.dataset.index) {
    const type = event.target.dataset.type;
    if (type === "menu_notes") {
      menuElements[0].classList.toggle('')
    } else if (type === "menu_lists") {

    } else if (type === "menu_user") {

    }
  }
};