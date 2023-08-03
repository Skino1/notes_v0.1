const body = document.querySelector("#body_container");

const menuBtn = document.querySelector("#menu_button");
const menuElements = Array.from(document.querySelectorAll(".menu_element"));
const menuIcons = document.querySelectorAll("#menu_icon");
const menuElTitle = document.querySelectorAll("#menu_element_title");
const menu = Array.from(document.querySelectorAll("#menu"));
const menuDesktop = document.querySelector("#menu_desktop")

const createNewElement = document.querySelector(".create_new")

const filterIcon = document.querySelector("#filters_mobile");
const filterMenu = document.querySelector("#filters_menu_mobile");

const noteElement = menuElements.filter(
  (element) => element.dataset.type === "menu_notes"
);
const listElement = menuElements.filter(
  (element) => element.dataset.type === "menu_lists"
);
let typeOfNotes = 'note';

noteElement.forEach(element => {
  element.classList.add("bg-slate-700");
});

menuBtn.addEventListener("click", function () {
    body.classList.replace("grid-cols-[0.20fr_1fr]", "grid-cols-[0.05fr_1fr]");
  for (let i = 0; i < menuElTitle.length; i++) {
    const element = menuElTitle[i];
      element.classList.toggle("hidden");
  }
  for (let i = 0; i < menuElements.length; i++) {
    const element = menuElements[i];
    if (element.classList.contains("md:p-5")) {
      element.classList.replace("md:p-5", "md:p-3");
    } else {
      element.classList.replace("md:p-3", "md:p-5");
    }
  }
    menuDesktop.classList.toggle("w-20");
});

menu.forEach(element => {
  element.addEventListener("click", function (event) {
    if (event.target.dataset.type) {
      const type = event.target.dataset.type;
      if (type == "menu_notes") {
        noteElement.forEach(element => {
          element.classList.add("bg-slate-700");
          element.classList.remove("hover:bg-slate-800");
        });
        listElement.forEach(element => {
          element.classList.add("hover:bg-slate-800"); 
          element.classList.remove("bg-slate-700");
        });
        typeOfNotes = 'note'
      }
      if (type == "menu_lists") {
        noteElement.forEach(element => {
          element.classList.remove("bg-slate-700");
          element.classList.add("hover:bg-slate-800");
        });
        listElement.forEach(element => {
          element.classList.add("bg-slate-700");
          element.classList.remove("hover:bg-slate-800");
        });
        typeOfNotes = 'list'
      }
    }
  });

});

createNewElement.addEventListener("click", function () {
    inputTitleNote.focus()
})


filterIcon.onclick = function () {
  if (filterMenu.classList.contains("hidden")) {
    filterMenu.classList.replace("hidden", "flex")
  } else {
    filterMenu.classList.replace("flex", "hidden")
    
  }
}

