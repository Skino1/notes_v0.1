<template>
    <div id="add_image"
        class="group hover:bg-slate-500 transition-colors text-black p-2 m-2 bg-slate-300 rounded-xl flex flex-col">
        <input class="note_title font-bold mb-2 p-1 rounded-md transition-colors" placeholder="Add new image"
            v-model="noteTitle" v-bind:class="[titleIsNull ? 'bg-red-400' : 'bg-slate-100']"
            v-on:keypress.enter="addNote" />
        <textarea class="note_text resize-none rounded-md h-full transition-colors" type="text" placeholder="Insert URL image"
            v-model="noteText" v-bind:class="[textIsNull ? 'bg-red-400' : 'bg-slate-300']"></textarea>
        <div class="collapse group-hover:visible flex flex-nowrap justify-end pt-1" id="buttons">
            <button class="filter-blue bg-[url('./assets/svg/add-circle.svg')] w-5 h-5" id="add_button"
                v-on:click="addNote"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            noteTitle: "",
            noteText: "",
            titleIsNull: false,
            textIsNull: false,
        }
    },
    methods: {
        addNote() {
            const typeOfNotes = this.$store.state.typeOfNotes
            if (this.noteTitle == "") {
                this.titleIsNull = true;
                setTimeout(
                    function () {
                        this.titleIsNull = false;
                    }.bind(this),
                    1000
                );
                return;
            }
            if (this.noteText == "") {
                this.textIsNull = true;
                setTimeout(
                    function () {
                        this.textIsNull = false;
                    }.bind(this),
                    1000
                );
                return;
            }
            const newNote = {
                title: this.noteTitle,
                text: this.noteText,
                checked: false,
                createdAt: new Date(),
                type: typeOfNotes,
            };
            this.$store.dispatch('addNote', newNote)
            this.noteTitle = "";
            this.noteText = "";
        },
    },
        computed: {
        notes() {
            return this.$store.state.notes
        },
    }
}
</script>