<template>
    <div
          class="invisible flex items-center justify-center fixed left-0 top-0 w-screen h-screen overflow-auto bg-slate-950/50"
          id="modal_background"
        >
          <div
            class="bg-slate-100 dark:bg-slate-700 mx-auto h-[80%] px-3 w-[80%] rounded-3xl"
            id="modal_window"
          >
            <span
              class="text-slate-600 float-right text-3xl font-bold cursor-pointer hover:text-slate-800 flex align-top"
              id="close_window"
              >&times;</span
            >
            <div
              class="hidden text-black dark:text-white"
              data-index="modal_1"
              id="modal_content"
            >
              <p class="font-bold text-3lx uppercase text-center pt-2">
                About NoteS
              </p>
              <div class="flex flex-row justify-center pt-5">
                <img
                  class="filter-blue"
                  width="256px"
                  height="256px"
                  src="../assets/svg/documents-outline.svg"
                  alt="logo"
                />
                <span
                  class="uppercase font-bold xl:text-[100px] md:text-5xl align-middle"
                  >notes</span
                >
              </div>
            </div>
            <div
              class="hidden text-black dark:text-white"
              data-index="modal_2"
              id="modal_content"
            >
              <p
                class="dark:text-white font-bold text-3lx uppercase text-center pt-2"
              >
                Help
              </p>
              <div class="flex flex-row justify-center pt-5">
                <span
                  class="uppercase font-bold xl:text-[100px] md:text-5xl align-middle"
                  >Сам себе помоги</span
                >
              </div>
            </div>
            <div
              class="hidden text-black dark:text-white"
              data-index="modal_3"
              id="modal_content"
            >
              <p class="font-bold text-3lx uppercase text-center pt-2">Profile</p>
              <div class="flex flex-row justify-center pt-5">
                <span
                  class="uppercase font-bold xl:text-[100px] md:text-5xl align-middle"
                  >Guest</span
                >
              </div>
            </div>
          </div>
        </div>
</template>

<script>
</script>

<style>
</style>