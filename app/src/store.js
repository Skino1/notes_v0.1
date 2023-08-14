import { createStore } from "vuex";
// Create a new store instance.
const store = createStore({
  state: {
    typeOfNotes: "note",
    notes: [],
    menuHidden: false
  },
  mutations: {
    setTypeNotes (state, value) {
      state.typeOfNotes = value
    },
    toggleMenu(state) {
      state.menuHidden = !state.menuHidden
    },
    setNotes(state, value) {
      state.notes = state.notes.push(value)
    }
  }
});
export default store;
