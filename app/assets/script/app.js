const notes = [
  {
    title: "123",
    text: "123",
    checked: false,
  },
];

const inputTitleNote = document.querySelector("#note_title");
const inputTextNote = document.querySelector("#note_text");
const listOfNotes = document.querySelector("#list_notes");
const noteElement = document.querySelector("#note");

const addNoteBtn = document.querySelector("#add_button");
const checkBtn = document.querySelector("#check_button");
const removeBtn = document.querySelector("#remove_button");

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
            class="resize-none bg-slate-300 rounded-md"
            type="text"
            id="note_add_input"
            rows="5"
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

function getAddNote() {
  return `      
        <div
        id="note_add"
        class="group hover:bg-slate-500 transition-colors text-black p-2 m-2 bg-slate-300 rounded-xl flex flex-col"
      >
        <input
          class="font-bold mb-2 p-1 rounded-md"
          id="note_title"
          placeholder="Add new note"
        />
        <textarea
          class="resize-none bg-slate-300 rounded-md"
          type="text"
          id="note_text"
          rows="5"
          placeholder="Type here"
        ></textarea>
        <div
          class="collapse group-hover:visible flex flex-nowrap justify-end pt-1"
          id="buttons"
        >
          <button
            class="filter-blue bg-[url('assets/svg/add-circle.svg')] w-5 h-5" id="add_button"
          ></button>
        </div>
      </div>`;
}

updateListOfNotes();

function updateListOfNotes() {
  listOfNotes.innerHTML = "";
  listOfNotes.insertAdjacentHTML("beforeend", getAddNote());
  for (let index = 0; index < notes.length; index++) {
    listOfNotes.insertAdjacentHTML(
      "beforeend",
      getTemplateNote(notes[index], index)
    );
  }
}

addNoteBtn.onclick = function () {
  if (
    (inputTitleNote.value.length === 0) |
    (inputTextNote.value.length === 0)
  ) {
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
