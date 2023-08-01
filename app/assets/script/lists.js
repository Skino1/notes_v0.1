const lists = []

function getTemplateList(list, index) {
  return `
            <div
            id="list"
          class="${
            list.checked ? "bg-slate-500" : "bg-slate-300"
          } group text-black p-2 m-2 rounded-xl flex flex-col"
        >
          <p class="font-bold mb-2 p-1">${list.title}</p>
          <textarea
            class="resize-none ${
              list.checked ? "bg-slate-500" : "bg-slate-300"
            } rounded-md h-full"
            type="text"
            id="note_add_input"
            placeholder="Type here"
            disabled
          >${list.text}</textarea>
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

function updateListOfLists() {
  let listElements = document.querySelectorAll("#list");
  for (let index = 0; index < listElements.length; index++) {
    const element = listElements[index];
    element.remove();
  }
  for (let index = 0; index < lists.length; index++) {
    listOfNotes.insertAdjacentHTML(
      "beforeend",
      getTemplateList(lists[index], index)
    );
  }
}

addNoteBtn.onclick = function () {
  if ((inputTitleNote.value == "") | (inputTextNote.value == "")) {
    return;
  }
  const newList = {
    title: inputTitleNote.value,
    text: inputTextNote.value,
    checked: false,
  };
  lists.push(newList);
  updateListOfLists();
  inputTitleNote.value = "";
  inputTextNote.value = "";
};

listOfNotes.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      lists[index].checked = !lists[index].checked;
    } else if (type === "remove") {
      lists.splice(index, 1);
    }
  }
  updateListOflist();
};
