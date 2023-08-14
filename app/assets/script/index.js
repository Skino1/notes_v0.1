var app = Vue.createApp({
  data() {
    return {
      noteTitle: "",
      noteText: "",
      notes: [],
      titleIsNull: false,
      textIsNull: false,
      selectedSort: "Date",
      selectedFilter: "All",
      selectedType: "All",
      sortOptions: ["Date", "Active", "Completed"],
      filterOptions: ["All", "Active", "Completed"],
      typeOptions: ["All", "Notes", "Lists"],
      typeOfNotes: "",
    };
  },
  methods: {
    getTemplateList(note, index) {
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
        ulContent += `<li class="list_element flex items-center">${button.outerHTML}${lines[i]}</li>`;
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
    },
    addNote() {
      if (this.noteTitle == "") {
        this.titleIsNull = true;
        setTimeout(
          function () {
            this.titleIsNull = false;
          }.bind(this),
          1000
        );
        return;
      }
      if (this.noteText == "") {
        this.textIsNull = true;
        setTimeout(
          function () {
            this.textIsNull = false;
          }.bind(this),
          1000
        );
        return;
      }
      const newNote = {
        id: Math.floor(Math.random() * 1000),
        title: this.noteTitle,
        text: this.noteText,
        checked: false,
        createdAt: new Date(),
        type: this.typeOfNotes,
        rowCheked: [],
      };
      this.notes.push(newNote);
      this.noteTitle = "";
      this.noteText = "";
    },

    changeNote(index, type) {
      //   let checkRow = document.querySelectorAll(".row_check_button");
      if (type === "toggle") {
        this.notes[index].checked = !this.notes[index].checked;
      } else if (type === "remove") {
        this.notes.splice(index, 1);
      }
      else if (type === "toggle_row") {
          const chldIndex = event.target.parentNode.dataset.index
            notes[index].rowCheked.push(chldIndex);
            checkRow[chldIndex].classList.replace("filter_blue", "filter_green")
          }
    },
    sortList() {
      if (this.selectedSort === "Active") {
        this.notes.sort((a, b) => a.checked - b.checked);
      } else if (this.selectedSort === "Completed") {
        this.notes.sort((a, b) => b.checked - a.checked);
      } else if (this.selectedSort === "Date") {
        this.notes.sort((a, b) => a.createdAt - b.createdAt);
      }
    },
  },
  computed: {
    filterList() {
      return this.notes.filter((note) => {
        switch (this.selectedFilter) {
          case "Active":
            return !note.checked;
          case "Completed":
            return note.checked;
          case "All":
            return note;
        }
      });
    },
    typeList() {
      return this.notes.filter((note) => {
        switch (this.selectedFilter) {
          case "Notes":
            return note.typeOfNotes == "note";
          case "Lists":
            return note.typeOfNotes == "list";
          case "All":
            return note;
        }
      });
    },
  },
}).mount("#app");

app.component ('note', {
    data() {
        return
        
    }
})