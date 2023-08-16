<template name="note">
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div class="group text-black p-2 m-2 rounded-xl flex flex-col " v-for="(note, index) in notes" :key="index"
    v-bind:class="[note.checked ? 'bg-slate-500' : 'bg-slate-300']">
    <p class="note_title font-bold mb-2 p-1">{{ note.title }}</p>
    <ul class="note_text rounded-md h-full">
      <li class="note_text rounded-md h-full" v-if="note.type == 'note'">{{ note.text }}</li>
      <li class="flex items-center" v-if="note.type == 'list'" v-for="(line, index) in lines" :key="index"><button
        class="row_check_button filter-blue bg-[url('./assets/svg/chevron-forward-circle-outline.svg')] w-5 h-5"
        v-on:click="changeNote(index, 'toggle_row')"></button>{{ line }}</li>
      <li class="note_text rounded-md h-full" v-if="note.type == 'image'"><img v-bind:src="note.text" alt="123" ></li>
          
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
export default {
  data() {
    return {
      lines: [],
    }
  },
  beforeUpdate() {
    for (let i = 0; i < this.$store.state.notes.length; i++) {
      const element = this.$store.state.notes[i];
      if (element.type == 'list') {
        this.lines = element.text.split("\n")
      } 
    }
  },
  props: ["notes"],
  emits: ["noteDeleted", "noteChecked", 'noteRow'],

  methods: {
    changeNote(index, type) {
      if (type === "toggle") {
        this.$emit('noteChecked', index);
      } else if (type === "remove") {
        this.$emit('noteDeleted', index);
      } else if (type === "toggle_row") {
        this.$emit('noteRow', index);
      }
    }
  }
}
</script>
