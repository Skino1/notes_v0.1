const themeBtn = document.querySelector("#theme_switch");

themeBtn.addEventListener("click", function () {
  if (listOfNotes.classList.contains("bg-slate-700")) {
    listOfNotes.classList.toggle("bg-white");
    listOfNotes.classList.toggle("bg-slate-700");
  } else {
    listOfNotes.classList.toggle("bg-slate-700");
    listOfNotes.classList.toggle("bg-white");
  }
    if (modalWindows[0].classList.contains("bg-slate-700")) {
      modalWindows[0].classList.toggle("bg-slate-100");
      modalWindows[0].classList.toggle("bg-slate-700");
    } else {
      modalWindows[0].classList.toggle("bg-slate-700");
      modalWindows[0].classList.toggle("bg-slate-100");
    }
});
