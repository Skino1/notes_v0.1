import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Create a new store instance.
const store = createStore({
  state: {
    typeOfNotes: "note",
    notes: [],
    menuHidden: false,
    author: "guest"
  },
  actions: {
    fetchNotes({ commit }) {
      axios
        .get("/notes")
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            commit("setNotes", element);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addNote({ commit }, note) {
      axios
        .post("/notes", note)
        .then(() => {
          commit("ADD_NOTE", note);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteNote({ commit }, {id, index}) {
      axios
        .delete(`/notes/${id}`)
        .then(() => {
          console.log(id,index);
          commit("DELETE_NOTE", index);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mutations: {
    setNotes(state, data) {
      state.notes.push(data);
    },
    ADD_NOTE(state, note) {
      state.notes.push(note);
    },
    DELETE_NOTE(state, index) {
      state.notes.splice(index, 1);
    },
    setTypeNotes(state, value) {
      state.typeOfNotes = value;
    },
    toggleMenu(state) {
      state.menuHidden = !state.menuHidden;
    },
    // filterList(state, value) {
    //   state.ArrayNotes = state.notes;
    //   if (value === "Active") {
    //     state.ArrayNotes = state.ArrayNotes.filter(
    //       (note) => note.checked == false
    //     );
    //   } else if (value === "Completed") {
    //     state.ArrayNotes = state.ArrayNotes.filter(
    //       (note) => note.checked == true
    //     );
    //   } else if (value === "All") {
    //     state.ArrayNotes = state.notes;
    //   }
    // },
    // typeList(state, value) {
    //   state.ArrayNotes = state.notes;
    //   if (value === "Notes") {
    //     state.ArrayNotes = state.ArrayNotes.filter(
    //       (note) => note.type == "note"
    //     );
    //   }
    //   if (value === "Lists") {
    //     state.ArrayNotes = state.ArrayNotes.filter(
    //       (note) => note.type == "list"
    //     );
    //   }
    //   if (value === "Images") {
    //     state.ArrayNotes = state.ArrayNotes.filter(
    //       (note) => note.type == "image"
    //     );
    //   }
    //   if (value === "All") {
    //     state.ArrayNotes = state.notes;
    //   }
    // },
  },
  getters: {
    notes(state) {
      return state.notes;
    },
    author(state) {
      return state.author
    }
  },
});
export default store;
