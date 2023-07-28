const menuBtn = document.querySelector("#menu_button");
const body = document.querySelector("#body_container");
const menuElements = document.querySelectorAll("#menu_element");
const menuIcons = document.querySelectorAll("#menu_icon");
const menuElTitle = document.querySelectorAll("#menu_element_title");
const menu = document.querySelector("#menu");

menuElements[0].classList.add("bg-slate-700");

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
    if (element.classList.contains("md:p-3")) {
      element.classList.toggle("md:p-5");
      element.classList.toggle("md:p-3");
    } else {
      element.classList.toggle("md:p-3");
      element.classList.toggle("md:p-5");
    }
  }
  if (menu.classList.contains("w-20")) {
    menu.classList.remove("w-20");
  } else {
    menu.classList.add("w-20");
  }
});

menu.onclick = function (event) {
  if (event.target.dataset.type) {
    const type = event.target.dataset.type;
    if (type == "menu_notes") {
      menuElements[0].classList.add("bg-slate-700");
      menuElements[1].classList.add('hover:bg-slate-800')
      menuElements[0].classList.remove("hover:bg-slate-800");
      menuElements[1].classList.remove("bg-slate-700");
    }
    if (type == "menu_lists") {
      menuElements[0].classList.remove("bg-slate-700");
      menuElements[1].classList.add("bg-slate-700");
      menuElements[0].classList.add("hover:bg-slate-800");
      menuElements[1].classList.remove("hover:bg-slate-800");
    }
  }
};
