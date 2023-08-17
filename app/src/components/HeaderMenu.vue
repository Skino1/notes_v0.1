<template>
  <header
    class="bg-slate-900 text-white dark:text-white grid grid-cols-[0.25fr_1fr] grid-rows-1 row-start-1 row-end-2 col-start-1 col-end-3 py-2 ">
    <div class="flex flex-nowrap row-start-1 row-end-2 col-start-1 col-end-2 items-center">
      <img id="menu_button" class="filter-white ml-7 cursor-pointer" width="24" height="24"
        src="../assets/svg/menu-outline.svg" alt="burger_menu" v-on:click="switchMenu" />
      <img class="filter-white ml-5" width="24" height="24" src="../assets/svg/documents-outline.svg" alt="logo" />
      <p class="header__company pl-1">NoteS</p>
    </div>
    <div class="flex row-start-1 row-end-2 col-start-2 col-end-3 justify-end pr-2">
      <ul class="flex flex-nowrap">
        <li class="px-3 flex flex-nowrap items-center cursor-pointer" id="theme_switch" v-on:click="switchTheme">
          <img class="filter-white" height="20" width="20" src="../assets/svg/contrast-outline.svg" alt="theme_icon" />
          <p class="pl-1" id="header_menu_title">Theme</p>
        </li>
        <li class="px-3 flex flex-nowrap items-center cursor-pointer" id="modal_btn" data-index="modal_1">
          <img class="filter-white" height="20" width="20" src="../assets/svg/information-outline.svg" alt="about_icon" />
          <p id="header_menu_title">About</p>
        </li>
        <li class="px-3 flex flex-nowrap items-center cursor-pointer" id="modal_btn" data-index="modal_2">
          <img class="filter-white" height="20" width="20" src="../assets/svg/help-outline.svg" alt="help_icon" />
          <p id="header_menu_title">Help</p>
        </li>
        <li
          class="mobile_profile group p-2 items-center rounded-xl bg-slate-700 hover:bg-slate-800 transition-colors cursor-pointer justify-between"
          id="modal_btn" data-index="modal_3">
          <img class="filter-white" src="../assets/svg/person-circle-outline.svg" width="28px" height="28px" alt="Userpic"
            id="menu_icon" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
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