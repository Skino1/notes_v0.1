const themeBtn = document.querySelector("#theme_switch");
const modalWindow = document.querySelector("#modal_window")

themeBtn.addEventListener("click", function () {
  if (listOfNotes.classList.contains("bg-slate-700")) {
    listOfNotes.classList.toggle("bg-white");
    listOfNotes.classList.toggle("bg-slate-700");
  } else {
    listOfNotes.classList.toggle("bg-slate-700");
    listOfNotes.classList.toggle("bg-white");
  }
    if (modalWindow.classList.contains("bg-slate-700")) {
      modalWindow.classList.toggle("bg-slate-100");
      modalWindow.classList.toggle("bg-slate-700");
    } else {
      modalWindow.classList.toggle("bg-slate-700");
      modalWindow.classList.toggle("bg-slate-100");
    }
});
