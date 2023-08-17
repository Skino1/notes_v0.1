import { createStore } from "vuex";
// Create a new store instance.
const store = createStore({
  state: {
    typeOfNotes: "note",
    notes: [],
    ArrayNotes: [],
    menuHidden: false,
  },
  actions: {
    addNote({ commit }, note) {
      commit("ADD_NOTE", note);
    },
  },
  mutations: {
    ADD_NOTE(state, note) {
      state.notes.push(note);
    },
    setTypeNotes(state, value) {
      state.typeOfNotes = value;
    },
    toggleMenu(state) {
      state.menuHidden = !state.menuHidden;
    },
    setArrayOfNotes(state, value) {
      state.ArrayNotes = value;
    },
    filterList(state, value) {
      state.ArrayNotes = state.notes;
      if (value === "Active") {
        state.ArrayNotes = state.ArrayNotes.filter(
          (note) => note.checked == false
        );
      } else if (value === "Completed") {
        state.ArrayNotes = state.ArrayNotes.filter(
          (note) => note.checked == true
        );
      } else if (value === "All") {
        state.ArrayNotes = state.notes;
      }
    },
    typeList(state, value) {
      state.ArrayNotes = state.notes;
      if (value === "Notes") {
        state.ArrayNotes = state.ArrayNotes.filter(
          (note) => note.type == "note"
        );
      }
      if (value === "Lists") {
        state.ArrayNotes = state.ArrayNotes.filter(
          (note) => note.type == "list"
        );
      }
      if (value === "Images") {
        state.ArrayNotes = state.ArrayNotes.filter(
          (note) => note.type == "image"
        );
      }
      if (value === "All") {
        state.ArrayNotes = state.notes;
      }
    },
  },
  getters: {
    notes(state) {
      return state.notes;
    },
    ArrayNotes(state) {
      return state.ArrayNotes;
    },
  },
});
export default store;
