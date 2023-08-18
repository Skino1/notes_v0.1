<template>
    <div class="flex flex-row">
        <div class="flex items-center">
          <img class="filter-white mr-1" height="20" width="20" src="../assets/svg/swap-vertical-outline.svg" alt="sort_icon" />
          <select class="text-black rounded-md bg-slate-200" name="sort" id="sort_sel" v-model="selectedSort"
            @change="sortList">
            <option v-for="sort in sortOptions" :key="sort">{{ sort }}</option>
          </select>
          </div>
          <div class="flex items-center mx-2">
          <img class="filter-white mr-1" height="20" width="20" src="../assets/svg/options-outline.svg" alt="filter_icon" />
          <select class="text-black rounded-md bg-slate-200 " id="filter_sel" v-model="selectedFilter"
            @change="filterList">
            <option v-for="filter in filterOptions" :key="filter">
              {{ filter }}
            </option>
          </select>
          </div>
          <div class="flex items-center">
          <img class="filter-white mr-1" height="20" width="20" src="../assets/svg/layers-outline.svg" alt="type_icon" />
          <select class="text-black rounded-md bg-slate-200" name="type" id="type_sel" v-model="selectedType"
            @change="typeList">
            <option v-for="types in typeOptions" :key="types">
              {{ types }}
            </option>
          </select>
          </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            selectedSort: "Date",
            selectedFilter: "All",
            selectedType: "All",
            sortOptions: ["Date", "Active", "Completed"],
            filterOptions: ["All", "Active", "Completed"],
            typeOptions: ["All", "Notes", "Lists", 'Images'],
        };
    },
    methods: {
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
            this.$store.commit("filterList", this.selectedFilter )
        },
        typeList() {
            this.$store.commit("typeList", this.selectedType)
        },
    },
      computed: {
        notes() {
            return this.$store.state.notes
        },
        ArrayNotes() {
            return this.$store.state.ArrayNotes
        }
    }
}
</script>