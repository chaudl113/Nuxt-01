<template>
  <form @submit.prevent="onSave">
    <div class="form-group">
      <label for="name">Name: </label>
      <input
        v-model="editedDeck.name"
        type="text"
        class="form-control"
        placeholder="Please enter name deck"
      />
    </div>

    <div class="form-group">
      <label for="description">Description: </label>

      <textarea
        id="description"
        v-model="editedDeck.description"
        class="form-control"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="file">Image: </label>
      <input
        id="file"
        v-model="editedDeck.thumbnail"
        type="text"
        class="form-control"
        placeholder="https://example.com/foo.png"
      />
      <div class="preview"></div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-dismiss="modal"
        @click.prevent="closeModal"
      >
        Close
      </button>
      <button type="submit" class="btn btn-primary">
        {{ editedDeck && editedDeck.id ? 'Edit' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      required: false,
      default: () => ({
        name: '',
        description: '',
        thumbnail: '',
      }),
    },
  },
  data() {
    return {
      editedDeck: this.deck
        ? { ...this.deck }
        : {
            name: '',
            description: '',
            thumbnail: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedDeck)
    },
    closeModal() {
      this.$modal.close({ name: 'DeckFormModal' })
    },
  },
}
</script>
