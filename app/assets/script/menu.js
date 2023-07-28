const menu = document.querySelector("#menu");
const body = document.querySelector("#body_container");
const menuElement = document.querySelector('.menu_element')

menu.addEventListener("click", function () {
  if (body.classList.contains("grid-cols-[0.25fr_1fr]")) {
    body.classList.toggle("grid-cols-[0.25fr_1fr]");
    body.classList.toggle("grid-cols-[0.01fr_1fr]");
  } else {
    body.classList.toggle("grid-cols-[0.25fr_1fr]");
    body.classList.toggle("grid-cols-[0.01fr_1fr]");
  }
  if (menuElement.style.display === 'none') {
    menuElement.style.display = 'block';
  } else {
    menuElement.style.display = "none";
  }
});
