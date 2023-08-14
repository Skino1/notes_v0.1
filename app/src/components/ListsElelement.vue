
<script>
export default {
    props: ["notes"],
    emits: ["noteDeleted", "noteChecked", "rowChecked"],
    methods: {
        changeNote(index, type) {
            if (type === "toggle") {
                this.$emit('noteChecked', index);
            } else if (type === "remove") {
                this.$emit('noteDeleted', index);
            } else if (type === "toggle_row") {
                this.$emit('rowChecked', index)
            }
        },
    }

}
</script>

<style></style>

