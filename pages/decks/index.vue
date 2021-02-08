<template>
  <div>
    <div class="container pt-5">
      <div class="clearfix pr-3">
        <h1>List of your decks</h1>
        <button
          type="button"
          class="btn btn-primary float-right"
          @click.prevent="openModal"
        >
          Create a Deck
        </button>
      </div>
      <ul class="cards">
        <DeckList
          v-for="deck in decks"
          :id="deck._id"
          :key="deck._id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
    <!-- modal -->
    <v-modal name="createDeckModal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLongTitle" class="modal-title">
            Create A New Deck
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click.prevent="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Name: </label>
              <input
                type="text"
                class="form-control"
                placeholder="Please enter name deck"
              />
            </div>

            <div class="form-group">
              <label for="description">Description: </label>
              <textarea
                id="description"
                class="form-control"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="file">Image: </label>
              <input id="file" type="file" class="form-control-file" />
              <div class="preview"></div>
            </div>
          </form>
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
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </v-modal>
  </div>
</template>
<script>
import DeckList from '@/components/Decks/DeckList.vue'
export default {
  components: {
    DeckList,
  },
  data() {
    return {
      decks: [
        {
          _id: 1,
          name: 'Learn English',
          description:
            'Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Mauris blandit aliquet elit. ',
          thumbnail: 'https://picsum.photos/500/300/?image=10',
        },
        {
          _id: 2,
          name: 'Learn Chinese',
          description:
            'Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Mauris blandit aliquet elit. ',
          thumbnail: 'https://picsum.photos/500/300/?image=11',
        },
        {
          _id: 3,
          name: 'Learn Japanese',
          description:
            'Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Mauris blandit aliquet elit. ',
          thumbnail: 'https://picsum.photos/500/300/?image=12',
        },
      ],
    }
  },
  methods: {
    showDeck() {
      this.$router.push('/decks/' + this.deckID)
    },
    openModal() {
      this.$modal.open({ name: 'createDeckModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'createDeckModal' })
    },
  },
}
</script>
<style lang="scss">
/* Font */

.main {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.card_btn {
  color: #fff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.card_btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
