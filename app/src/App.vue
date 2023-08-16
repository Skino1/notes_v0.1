<template>
  <header
    class="bg-slate-900 text-white dark:text-white grid grid-cols-[0.25fr_1fr] grid-rows-1 row-start-1 row-end-2 col-start-1 col-end-3 py-2 ">
    <div class="flex flex-nowrap row-start-1 row-end-2 col-start-1 col-end-2 items-center">
      <img id="menu_button" class="filter-white ml-7 cursor-pointer" width="24" height="24"
        src="./assets/svg/menu-outline.svg" alt="burger_menu" v-on:click="switchMenu" />
      <img class="filter-white ml-5" width="24" height="24" src="./assets/svg/documents-outline.svg" alt="logo" />
      <p class="header__company pl-1">NoteS</p>
    </div>
    <div class="flex row-start-1 row-end-2 col-start-2 col-end-3 justify-end pr-2">
      <ul class="flex flex-nowrap">
        <li class="px-3 flex flex-nowrap items-center cursor-pointer" id="theme_switch" v-on:click="switchTheme">
          <img class="filter-white" height="20" width="20" src="./assets/svg/contrast-outline.svg" alt="theme_icon" />
          <p class="pl-1" id="header_menu_title">Theme</p>
        </li>
        <li class="px-3 flex flex-nowrap items-center cursor-pointer" id="modal_btn" data-index="modal_1">
          <img class="filter-white" height="20" width="20" src="./assets/svg/information-outline.svg" alt="about_icon" />
          <p id="header_menu_title">About</p>
        </li>
        <li class="px-3 flex flex-nowrap items-center cursor-pointer" id="modal_btn" data-index="modal_2">
          <img class="filter-white" height="20" width="20" src="./assets/svg/help-outline.svg" alt="help_icon" />
          <p id="header_menu_title">Help</p>
        </li>
        <li
          class="mobile_profile group p-2 items-center rounded-xl bg-slate-700 hover:bg-slate-800 transition-colors cursor-pointer justify-between"
          id="modal_btn" data-index="modal_3">
          <img class="filter-white" src="./assets/svg/person-circle-outline.svg" width="28px" height="28px" alt="Userpic"
            id="menu_icon" />
        </li>
      </ul>
    </div>
  </header>
  <MainMenu></MainMenu>
  <main
    class="grid xl:grid-cols-4 xl:grid-rows-4 row-start-2 row-end-3 col-start-2 col-end-3 bg-white dark:bg-slate-700 rounded-l-3xl"
    id="list_notes">
    <CreateNote @NoteAdded="addNote"></CreateNote>
    <NotesElement :notes="ArrayNotes" @noteDeleted="deleteNote" @noteChecked="checkNote" @noteRow="toggleRow"></NotesElement>
  </main>
  <footer class="text-white dark:text-white flex justify-between row-start-3 row-end-4 col-start-2 col-end-3 items-center"
    id="footer">
    <div class="flex flex-nowrap items-center" id="filters_desktop">
      <img class="filter-white" height="18" width="18" src="./assets/svg/swap-vertical-outline.svg" alt="sort_icon" />
      <select class="text-black rounded-md bg-slate-200 ml-5" name="sort" id="sort_sel" v-model="selectedSort"
        @change="sortList">
        <option v-for="sort in sortOptions" :key="sort">{{ sort }}</option>
      </select>
      <img class="filter-white ml-5" height="20" width="20" src="./assets/svg/options-outline.svg" alt="filter_icon" />
      <select class="text-black rounded-md bg-slate-200 ml-5" id="filter_sel" v-model="selectedFilter"
        @change="filterList">
        <option v-for="filter in filterOptions" :key="filter">
          {{ filter }}
        </option>
      </select>
      <img class="filter-white ml-5" height="20" width="20" src="./assets/svg/layers-outline.svg" alt="type_icon" />
      <select class="text-black rounded-md bg-slate-200 ml-5" name="type" id="type_sel" v-model="selectedType"
        @change="typeList">
        <option v-for="types in typeOptions" :key="types">
          {{ types }}
        </option>
      </select>
    </div>
    <div class="copyrights md:flex sm:hidden justify-end pr-5">
      WIP Disigned by Skino 2023
    </div>
  </footer>
  <ModalWindow></ModalWindow>
</template>

<script>
import NotesElement from './components/NotesElement.vue'
import MainMenu from './components/MainMenu.vue'
import CreateNote from './components/CreateNote.vue'
import ModalWindow from './components/ModalWindow.vue'


export default {
  name: 'App',
  emits: ["noteDeleted", "noteChecked"],
  data() {
    return {
      notes: this.$store.state.notes,
      ArrayNotes: [],
      selectedSort: "Date",
      selectedFilter: "All",
      selectedType: "All",
      sortOptions: ["Date", "Active", "Completed"],
      filterOptions: ["All", "Active", "Completed"],
      typeOptions: ["All", "Notes", "Lists", 'Images'],
    };
  },
  components: {
    NotesElement,
    MainMenu,
    CreateNote,
    ModalWindow,
  },
  methods: {

    addNote(newNote) {
      this.notes.push(newNote);
      this.ArrayNotes = this.notes
    },

    deleteNote(index) {
      this.notes.splice(index, 1);
    },

    checkNote(index) {
      this.notes[index].checked = !this.notes[index].checked
    },

    toggleRow(index) {
      this.notes[index]
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
    filterList() {
      this.ArrayNotes = this.notes;
      if (this.selectedFilter === "Active") {
        this.ArrayNotes = this.ArrayNotes.filter(note => note.checked == false);
      } else if (this.selectedFilter === "Completed") {
        this.ArrayNotes = this.ArrayNotes.filter(note => note.checked == true);
      } else if (this.selectedFilter === "All") {
        this.ArrayNotes = this.notes;
      }
    },
    typeList() {
      this.ArrayNotes = this.notes;
      if (this.selectedType === "Notes") {
        this.ArrayNotes = this.ArrayNotes.filter(note => note.type == 'note');
      } 
      if (this.selectedType === "Lists") {
        this.ArrayNotes = this.ArrayNotes.filter(note => note.type == 'list');
      } 
      if (this.selectedType === "Images") {
        this.ArrayNotes = this.ArrayNotes.filter(note => note.type == 'image');
      } 
      if (this.selectedType === "All") {
        this.ArrayNotes = this.notes;
      }
    },
    switchTheme() {
      document.body.classList.toggle("dark")
    },
    switchMenu() {
      const appBody = document.querySelector("#app");
      this.$store.commit('toggleMenu')
      if (appBody.classList.contains("grid-cols-[0.20fr_1fr]")) {
        appBody.classList.replace("grid-cols-[0.20fr_1fr]", "grid-cols-[0.05fr_1fr]");
      } else {
        appBody.classList.replace("grid-cols-[0.05fr_1fr]", "grid-cols-[0.20fr_1fr]");
      }
    }
  }
}
</script>

<style></style>