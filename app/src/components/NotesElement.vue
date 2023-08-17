<template name="note">
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="group text-black p-2 m-2 rounded-xl flex flex-col " v-for="(note, index) in ArrayNotes" :key="index"
    v-bind:class="[note.checked ? 'bg-slate-500' : 'bg-slate-300']">
    <p class="note_title font-bold mb-2 p-1">{{ note.title }}</p>
    <ul class="note_text rounded-md h-full">
      <li class="note_text rounded-md h-full" v-if="note.type == 'note'">{{ note.text }}</li>
      <li class="flex items-center" v-if="note.type == 'list'" v-for="(line, rowindex) in note.linesOfList" :key="rowindex">
        <button
          class="row_check_button bg-[url('./assets/svg/chevron-forward-circle-outline.svg')] w-5 h-5 hover:bg-[url('./assets/svg/checkmark-circle.svg')]"
          v-on:click="toggleRowList(index, rowindex)" v-bind:class="[note.linesCheked.includes(rowindex) ? 'filter-green' : 'filter-blue']"></button>{{ line }}</li>
      <li class="note_text rounded-md h-full" v-if="note.type == 'image'"><img v-bind:src="note.text" alt="123"></li>

    </ul>

    <div class="invisible group-hover:visible flex flex-nowrap justify-end pt-1">
      <button class="check_button filter-green bg-[url('./assets/svg/checkmark-circle.svg')] w-5 h-5"
        v-on:click="changeNote(index, 'toggle')"></button>
      <button class="remove_button filter-red bg-[url('./assets/svg/close-circle.svg')] w-5 h-5"
        v-on:click="changeNote(index, 'remove')"></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      lines: [],
    }
  },

  methods: {
    toList(note) {
      return note.text.split("\n")
    },
    changeNote(index, type) {
      if (type === "toggle") {

        this.notes[index].checked = !this.notes[index].checked
      } else if (type === "remove") {
        this.notes.splice(index, 1);

      }
    },
    toggleRowList(noteIndex, rowIndex) {
      if (!this.notes[noteIndex].linesCheked.includes(rowIndex)) {
        this.notes[noteIndex].linesCheked.push(rowIndex)
        } else {
          console.log(noteIndex,rowIndex);
          const removeIndex = this.notes[noteIndex].linesCheked.field == rowIndex
          this.notes[noteIndex].linesCheked.splice(removeIndex, 1)
        }
    }
  },
  computed: {
    ...mapState(['ArrayNotes']),
    notes() {
      return this.$store.state.notes
    },
  }
}
</script>
