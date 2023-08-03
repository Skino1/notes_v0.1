const themeBtn = document.querySelector("#theme_switch");
const modalWindow = document.querySelector("#modal_window");
const modalContent = document.querySelectorAll("#modal_content")

themeBtn.addEventListener("click", function () {

    listOfNotes.classList.toggle("bg-white");
    listOfNotes.classList.toggle("bg-slate-700");

    modalWindow.classList.toggle("bg-slate-100");
    modalWindow.classList.toggle("bg-slate-700");
    
    for (let i = 0; i < modalContent.length; i++) {
        const element = modalContent[i];
        element.classList.toggle("text-black");
        element.classList.toggle("text-white");
    }
});
