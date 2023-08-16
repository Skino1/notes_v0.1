<template>
  <aside class="bg-slate-900 text-white dark:text-white row-start-2 row-end-3 col-start-1 col-end-2 flex justify-between flex-col"
    id="menu_desktop" v-bind:class="[this.$store.state.menuHidden == true ? 'w-20' : 'w-full']">
    <ul class="flex flex-col last:justify-end" id="menu">
      <li class="md:my-3 flex flex-nowrap items-center justify-center cursor-pointer">
        <img class="filter-white" src="../assets/svg/add-outline.svg" height="32" width="32" alt="notes_icon"
           />
        <p class="create_new text-center" id="menu_element_title" v-bind:class="[this.$store.state.menuHidden == true ? 'hidden' : '']">
          Create new
        </p>
      </li>
      <li
        class="menu_element sm:p-1 flex flex-nowrap items-center rounded-xl md:my-1 md:mx-4 sm:mx-1 cursor-pointer transition-colors"
         data-type="menu_notes" v-on:click="makeActive('note')"
        v-bind:class="[activeElement == 'note' ? 'bg-slate-700' : 'hover:bg-slate-800', this.$store.state.menuHidden == true ? 'md:p-3' : 'md:p-5']" >
        <img class="filter-white" src="../assets/svg/document-outline.svg" height="32" width="32" alt="notes_icon"
          />
        <p class="ml-5" id="menu_element_title" v-bind:class="[this.$store.state.menuHidden == true ? 'hidden' : '']" >Note</p>
      </li>
      <li
        class="menu_element sm:p-1 flex flex-nowrap items-center  rounded-xl md:my-1 md:mx-4 sm:mx-1 cursor-pointer transition-colors"
         data-type="menu_lists" v-on:click="makeActive('list')"
        v-bind:class="[activeElement == 'list' ? 'bg-slate-700' : 'hover:bg-slate-800', this.$store.state.menuHidden == true ? 'md:p-3' : 'md:p-5']">
        <img class="filter-white" src="../assets/svg/list-outline.svg" height="32" width="32" alt="lists_icon"
           />
        <p class="ml-5" id="menu_element_title" v-bind:class="[this.$store.state.menuHidden == true ? 'hidden' : '']">List</p>
      </li>
      <li
        class="menu_element sm:p-1 flex flex-nowrap items-center  rounded-xl md:my-1 md:mx-4 sm:mx-1 cursor-pointer transition-colors"
         data-type="menu_lists" v-on:click="makeActive('image')"
        v-bind:class="[activeElement == 'image' ? 'bg-slate-700' : 'hover:bg-slate-800', this.$store.state.menuHidden == true ? 'md:p-3' : 'md:p-5']">
        <img class="filter-white" src="../assets/svg/image-outline.svg" height="32" width="32" alt="lists_icon"
           />
        <p class="ml-5" id="menu_element_title" v-bind:class="[this.$store.state.menuHidden == true ? 'hidden' : '']">Image</p>
      </li>
      <hr class="mx-20 mt-2 border-t-slate-500" />
    </ul>
    <div
      class="group menu_element flex flex-nowrap items-center rounded-xl bg-slate-700 hover:bg-slate-800 transition-colors md:m-4 sm:m-1 sm:p-1 cursor-pointer"
      id="modal_btn" data-index="modal_3" v-bind:class="[this.$store.state.menuHidden == true ? 'md:p-3' : 'md:p-5']">
      <img class="filter-white" src="../assets/svg/person-circle-outline.svg" width="32" height="32" alt="Userpic" />
      <div class="text-center pl-5" id="menu_element_title" v-bind:class="[this.$store.state.menuHidden == true ? 'hidden' : '']">User</div>
    </div>
  </aside>
  <div class="hidden w-screen bg-slate-900 fixed bottom-0 justify-between" id="menu_mobile">
    <ul class="flex flex-row justify-between" id="menu">
      <li class="menu_element p-3 m-1 flex items-center rounded-xl cursor-pointer transition-colors" 
        v-on:click="makeActive('note')" v-bind:class="[activeElement == 'note' ? 'bg-slate-700' : 'hover:bg-slate-800']">
        <img class="filter-white" src="../assets/svg/document-outline.svg" height="32" width="32" alt="notes_icon"
          />
      </li>
      <li class="menu_element p-3 m-1 flex items-center rounded-xl cursor-pointer transition-colors"
        id="menu_element" v-on:click="makeActive('list')"
        v-bind:class="[activeElement == 'list' ? 'bg-slate-700' : 'hover:bg-slate-800']">
        <img class="filter-white" src="../assets/svg/list-outline.svg" height="32" width="32" alt="lists_icon"
           />
      </li>
    </ul>
    <div class="m-1 rounded-xl cursor-pointer transition-colors p-3 " id="filters_mobile" v-on:click="showFilters()" v-bind:class="[mobileFilters == true ? 'bg-slate-700' : '']" >
      <img class="filter-white" height="28" width="32" src="../assets/svg/funnel-outline.svg" alt="filter_icon" />
    </div>
  </div>
  <div class="w-screen bg-slate-900 fixed bottom-16 flex-row items-center justify-between p-4" v-bind:class="[mobileFilters == true ? 'flex' : 'hidden']"
    id="filters_menu_mobile">
    <img class="filter-white" height="18px" width="18px" src="../assets/svg/swap-vertical-outline.svg" alt="theme_icon" />
    <select class="text-black rounded-md bg-slate-200 h-full" name="sort" id="sort_sel">
      <option value="date">Date</option>
      <option value="completed">Completed</option>
      <option value="active">Active</option>
    </select>
    <img class="filter-white" height="20px" width="20px" src="../assets/svg/options-outline.svg" alt="theme_icon" />
    <select class="text-black rounded-md bg-slate-200" name="filter" id="filter_sel">
      <option value="add">All</option>
      <option value="completed">Completed</option>
      <option value="active">Active</option>
    </select>
    <img class="filter-white" height="20px" width="20px" src="../assets/svg/layers-outline.svg" alt="theme_icon" />
    <select class="text-black rounded-md bg-slate-200" name="type" id="type_sel">
      <option value="add">All</option>
      <option value="note">Notes</option>
      <option value="list">Lists</option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ['selectedNoteType'],
  data() {
    return {
      activeElement: 'note',
      mobileFilters: false
    }
  },

  methods: {
    showFilters() {
      this.mobileFilters = !this.mobileFilters
    },
    makeActive(item) {
      this.activeElement = item
      this.$store.commit('setTypeNotes', item)
    }
  }
}
</script>