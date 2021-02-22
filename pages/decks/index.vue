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
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import DeckList from '@/components/Decks/DeckList.vue'

export default {
  components: {
    DeckList,
  },
  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },

  created() {
    this.$store.dispatch('setDecks', this.decks)
    // eslint-disable-next-line no-console
    // console.log(this.$store.getters.decks)
  },

  methods: {
    openModal() {
      this.$modal.open({ name: 'DeckFormModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'DeckFormModal' })
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
