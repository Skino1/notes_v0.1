const notes = ["test"];

const inputTitleNote = document.querySelector("#note_title");
const inputTextNote = document.querySelector("#note_text");
const listOfNotes = document.querySelector("#list_notes");

const addNoteBtn = document.querySelector("#add_button");
const checkBtn = document.querySelector("#check_button");
const removeBtn = document.querySelector("#remove_button");

addNoteBtn.onclick = function () {
  if (
    (inputTitleNote.value.length === 0) |
    (inputTextNote.value.length === 0)
  ) {
    return;
  }
  listOfNotes.insertAdjacentHTML(
    "beforeend",
    getTemplateNote(inputTitleNote.value, inputTextNote.value)
  );
  inputTitleNote.value = "";
  inputTextNote.value = "";
};

checkBtn.onclick = function () {};

removeBtn.onclick = function () {

};

function getTemplateNote(noteTitle, noteText,index) {
 return `
          <div
        id="note"
        class="group text-black p-2 m-2 bg-slate-300 rounded-xl flex flex-col"
      >
        <p class="font-bold mb-2 p-1">${noteTitle}</p>
        <textarea
          class="resize-none bg-slate-300 rounded-md"
          type="text"
          id="note_add_input"
          rows="5"
          placeholder="Type here"
          disabled
        >${noteText}</textarea>
        <div
          class="invisible group-hover:visible flex flex-nowrap justify-end pt-1"
        >
          <button
            class="filter-green bg-[url('assets/svg/checkmark-circle.svg')] w-5 h-5" id="check_button"
          ></button>
          <button
            class="filter-red bg-[url('assets/svg/close-circle.svg')] w-5 h-5" id="remove_button"
          ></button>
        </div>
      </div>`;
}
