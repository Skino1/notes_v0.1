<template name="note">
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="group text-black p-2 m-2 rounded-xl flex flex-col " v-for="(note, index) in notes" :key="index"
    v-bind:class="[note.checked ? 'bg-slate-500' : 'bg-slate-300']">
    <p class="note_title font-bold mb-2 p-1">{{ note.title }}</p>
    <ul class="note_text rounded-md h-full">
      <li class="note_text rounded-md h-full" v-if="note.type == 'note'">{{ note.text }}</li>
      <li class="flex items-center" v-if="note.type == 'list'" v-for="(line, rowindex) in note.lines" :key="rowindex">
        <button
          class="row_check_button bg-[url('./assets/svg/chevron-forward-circle-outline.svg')] w-5 h-5 hover:bg-[url('./assets/svg/checkmark-circle.svg')]"
          v-on:click="toggleRowList(index, rowindex)"
          v-bind:class="[line.checkedRow ? 'filter-green' : 'filter-blue']"></button>{{ line.rowText }}
      </li>
      <li class="note_text rounded-md h-full" v-if="note.type == 'image'"><img v-bind:src="note.text" alt="123"></li>

    </ul>

    <div class="invisible group-hover:visible flex flex-nowrap justify-end pt-1">
      <button class="check_button filter-green bg-[url('./assets/svg/checkmark-circle.svg')] w-5 h-5"
        v-on:click="toggleNote(index)"></button>
      <button class="remove_button filter-red bg-[url('./assets/svg/close-circle.svg')] w-5 h-5"
        v-on:click="deleteNote(note.id, index)"></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    this.$store.dispatch("fetchNotes")
  },
  methods: {
    toggleNote(index) {
      if (this.notes[index].checked == false) {
        this.notes[index].checked = !this.notes[index].checked
        if (this.typeOfNotes == 'list') {
          this.notes[index].lines.forEach(line => line.checkedRow = true)
        }
      } else {
        this.notes[index].checked = !this.notes[index].checked
        if (this.typeOfNotes == 'list') {
          this.notes[index].lines.forEach(line => line.checkedRow = false)
        }
      }
    },
    deleteNote(id, index) {
      console.log(this.notes);
      this.$store.dispatch('deleteNote', { id, index })

    },
    toggleRowList(noteIndex, rowIndex) {
      if (this.notes[noteIndex].lines[rowIndex].checkedRow == false) {
        this.notes[noteIndex].lines[rowIndex].checkedRow = true
      } else {
        this.notes[noteIndex].lines[rowIndex].checkedRow = false
      }
      if (this.notes[noteIndex].lines.every(line => line.checkedRow)) {
        this.notes[noteIndex].checked = true
      }
      else {
        this.notes[noteIndex].checked = false
      }
    },
  },
  computed: {
    notes() {
      return this.$store.getters.notes
    },
    ...mapState(['typeOfNotes']),
  }
}
</script>
