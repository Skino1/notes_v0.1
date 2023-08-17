<template>
  <HeaderMenu></HeaderMenu>
  <MainMenu></MainMenu>
  <main
    class="grid xl:grid-cols-4 xl:grid-rows-4 row-start-2 row-end-3 col-start-2 col-end-3 bg-white dark:bg-slate-700 rounded-l-3xl"
    id="list_notes">
    <CreateNote @NoteAdded="addNote" v-if="typeOfNotes == 'note'"></CreateNote>
    <CreateList @NoteAdded="addNote" v-if="typeOfNotes == 'list'"></CreateList>
    <CreateImage @NoteAdded="addNote" v-if="typeOfNotes == 'image'"></CreateImage>
    <NotesElement></NotesElement>
  </main>
  <footer class="text-white dark:text-white flex justify-between row-start-3 row-end-4 col-start-2 col-end-3 items-center"
    id="footer">
    <FilterMenu></FilterMenu>
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
import FilterMenu from './components/FilterMenu.vue'
import CreateList from './components/CreateList.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import CreateImage from './components/CreateImage.vue'
import { mapState } from 'vuex'


export default {
  name: 'App',
  components: {
    NotesElement,
    MainMenu,
    CreateNote,
    ModalWindow,
    FilterMenu,
    CreateList,
    HeaderMenu,
    CreateImage,
  },
  methods: {

    addNote(newNote) {
      this.$store.dispatch('addNote', newNote)
      this.$store.commit('setArrayOfNotes', this.notes)
    },
  },
  computed: {
    ...mapState(['typeOfNotes']),
    notes() {
      return this.$store.state.notes
    },
    ArrayNotes() {
      return this.$store.state.ArrayNotes
    }
  }

}
</script>

<style></style>