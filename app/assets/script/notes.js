const notes = [];

const inputTitleNote = document.querySelector("#note_title");
const inputTextNote = document.querySelector("#note_text");
const listOfNotes = document.querySelector("#list_notes");

const addNoteBtn = document.querySelector("#add_button");
const checkBtn = document.querySelector("#check_button");
const removeBtn = document.querySelector("#remove_button");

const sortList = document.querySelector("#sort_sel");

function getTemplateNote(note, index) {
  return `
            <div
            id="note"
          class="${
            note.checked ? "bg-slate-500" : "bg-slate-300"
          } group text-black p-2 m-2 rounded-xl flex flex-col"
        >
          <p class="font-bold mb-2 p-1">${note.title}</p>
          <textarea
            class="resize-none ${
              note.checked ? "bg-slate-500" : "bg-slate-300"
            } rounded-md h-full"
            type="text"
            id="note_add_input"
            placeholder="Type here"
            disabled
          >${note.text}</textarea>
          <div
            class="invisible group-hover:visible flex flex-nowrap justify-end pt-1"
          >
            <button
              class="filter-green bg-[url('assets/svg/checkmark-circle.svg')] w-5 h-5" id="check_button" data-type="toggle" data-index="${index}"
            ></button>
            <button
              class="filter-red bg-[url('assets/svg/close-circle.svg')] w-5 h-5" id="remove_button" data-type="remove" data-index="${index}"
            ></button>
          </div>
        </div>`;
}

function updateListOfNotes() {
  let noteElements = document.querySelectorAll("#note");
  for (let index = 0; index < noteElements.length; index++) {
    const element = noteElements[index];
    element.remove();
  }
  for (let index = 0; index < notes.length; index++) {
    listOfNotes.insertAdjacentHTML(
      "beforeend",
      getTemplateNote(notes[index], index)
    );
  }
}
addNoteBtn.onclick = function () {
  if (inputTitleNote.value == "") {
    inputTitleNote.classList.add("bg-red-400");
    setTimeout(function () {
      inputTitleNote.classList.remove("bg-red-400");
    }, 1000);
    return;
  }
  if (inputTextNote.value == "") {
    inputTextNote.classList.add("bg-red-400");
    setTimeout(function () {
      inputTextNote.classList.remove("bg-red-400");
    }, 1000);
    return;
  }

  const newNote = {
    title: inputTitleNote.value,
    text: inputTextNote.value,
    checked: false,
  };
  notes.push(newNote);
  updateListOfNotes();
  inputTitleNote.value = "";
  inputTextNote.value = "";
};

listOfNotes.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].checked = !notes[index].checked;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
  }
  updateListOfNotes();
};

sortList.addEventListener("change", function (e) {});
