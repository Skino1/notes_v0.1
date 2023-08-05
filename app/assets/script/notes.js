const notes = [];

const inputTitleNote = document.querySelector(".note_title");
const inputTextNote = document.querySelector(".note_text");
const listOfNotes = document.querySelector("#list_notes");

const listAddBody = document.querySelector("#add_list");
const inputTitleList = document.querySelector(".list_title");
const inputTextList = document.querySelector(".list_text");

const noteBtn = document.querySelector("#buttons");
const addNoteBtn = document.querySelector("#add_button");
const checkBtn = document.querySelector(".check_button");
const removeBtn = document.querySelector(".remove_button");

const sortList = document.querySelector("#sort_sel");
const filteredList = document.querySelector("#filter_sel");

function getTemplateNote(note, index) {
  return `
  <div
  id="note_${index}"
  class="${
    note.checked ? "bg-slate-500" : "bg-slate-300"
  } group text-black p-2 m-2 rounded-xl flex flex-col"
  >
  <p class="note_title font-bold mb-2 p-1">${note.title}</p>
  <textarea
  class="note_text resize-none ${
    note.checked ? "bg-slate-500" : "bg-slate-300"
  } rounded-md h-full"
  type="text"
  placeholder="Type here"
  disabled
  >${note.text}</textarea>
  <div
  class="invisible group-hover:visible flex flex-nowrap justify-end pt-1" id="buttons"
  >
  <button
  class="check_button filter-green bg-[url('assets/svg/checkmark-circle.svg')] w-5 h-5"  data-type="toggle" data-index="${index}"
  ></button>
  <button
  class="remove_button filter-red bg-[url('assets/svg/close-circle.svg')] w-5 h-5"  data-type="remove" data-index="${index}"
  ></button>
  </div>
  </div>`;
}

function getTemplateList(note, index) {
  let text = note.text;
  let lines = text.split("\n");
  let ulContent = ""; // Создаем элемент <ul>
  
  for (let i = 0; i < lines.length; i++) {
    let li = document.createElement("li"); // Создаем элемент <li>
    let button = document.createElement("button");
    button.classList.add(
      "row_check_button",
      "filter-blue",
      "bg-[url('assets/svg/ellipse-outline.svg')]",
      "w-5",
      "h-5"
      );
      button.setAttribute("data-type", "toggle_row");
      button.setAttribute("data-index", i);
      li.appendChild(button);
      li.appendChild(document.createTextNode(lines[i])); // Добавляем текст строки в элемент <li>
      ulContent +=`<li class="list_element flex items-center">${button.outerHTML}${lines[i]}</li>`;
    }
    return `
    <div
    id="note_${index}"
    class="${
      note.checked ? "bg-slate-500" : "bg-slate-300"
    } group text-black p-2 m-2 rounded-xl flex flex-col"
    >
    <p class="note_title font-bold mb-2 p-1">${note.title}</p>
    <ul class="note_text list-inside h-full ${
      note.checked ? "bg-slate-500" : "bg-slate-300"
    }">${ulContent}</ul>
    <div
    class="invisible group-hover:visible flex flex-nowrap justify-end pt-1" id="buttons"
    >
    <button
    class="check_button filter-green bg-[url('assets/svg/checkmark-circle.svg')] w-5 h-5"  data-type="toggle" data-index="${index}"
    ></button>
    <button
    class="remove_button filter-red bg-[url('assets/svg/close-circle.svg')] w-5 h-5"  data-type="remove" data-index="${index}"
    ></button>
    </div>
    </div>`;
  }
          
  function updateListOfNotes(arrayOfNotes = notes) {
    let noteElements = document.querySelectorAll("[id^=note_]");
    for (let index = 0; index < noteElements.length; index++) {
      const element = noteElements[index];
      element.remove();
    }
    for (let index = 0; index < arrayOfNotes.length; index++) {
      if (arrayOfNotes[index].type == "note") {
        listOfNotes.insertAdjacentHTML(
          "beforeend",
          getTemplateNote(arrayOfNotes[index], index)
          );
        } else if (arrayOfNotes[index].type == "list") {
          listOfNotes.insertAdjacentHTML(
            "beforeend",
            getTemplateList(arrayOfNotes[index], index)
            );
          }
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
    createdAt: new Date(),
    type: typeOfNotes,
    rowCheked: [],
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
    }else if (type === "toggle_row") {
        const chldIndex = event.target.parentNode.dataset.index
          let checkRow = document.querySelectorAll(".row_check_button");
          console.log(chldIndex);
          notes[index].rowCheked.push(chldIndex);
          checkRow[chldIndex].classList.replace('filter_blue', 'filter_green')
        }
  }
  updateListOfNotes();
};



sortList.addEventListener("change", function (e) {
  const selectedOption = e.target.value;
  if (selectedOption === "active") {
    notes.sort((a, b) => a.checked - b.checked);
  } else if (selectedOption === "completed") {
    notes.sort((a, b) => b.checked - a.checked);
  } else if (selectedOption === "date") {
    notes.sort((a, b) => a.createdAt - b.createdAt);
  }

  updateListOfNotes();
});

filteredList.addEventListener("change", function (e) {
  const selectedOption = e.target.value;
  let filteredNotes = [];
  if (selectedOption === "active") {
    filteredNotes = notes.filter((note) => !note.checked);
    updateListOfNotes(filteredNotes);
  } else if (selectedOption === "completed") {
    filteredNotes = notes.filter((note) => note.checked);
    updateListOfNotes(filteredNotes);
  } else if (selectedOption === "all") {
    updateListOfNotes();
  }
});
