<template>
  <div>
    <DefaulHearder />
    <Nuxt />
    <!-- modal -->
    <v-modal v-slot="payload" name="DeckFormModal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLongTitle" class="modal-title">
            {{
              payload && payload.payload ? 'Edit a Deck' : 'Create a new Deck'
            }}
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
          <DeckForm :deck="payload.payload" @submit="onSubmit" />
        </div>
      </div>
    </v-modal>
    <DefaulFooter />
  </div>
</template>
<script>
import axios from 'axios'

import DeckForm from '@/components/Decks/DeckForm.vue'
import DefaulHearder from '@/components/Header/DefaulHearder.vue'
import DefaulFooter from '@/components/Footer/DefaulFooter.vue'

export default {
  components: {
    DefaulHearder,
    DefaulFooter,
    DeckForm,
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        this.$store
          .dispatch('addDeck', deckData)
          .then(() => this.$modal.close({ name: 'DeckFormModal' }))
      } else {
        this.$store.dispatch('editDeck', deckData).then(() => {
          this.$modal.close({ name: 'DeckFormModal' })
          this.$router.push('/decks')
        })
      }
    },
    closeModal() {
      this.$modal.close({ name: 'DeckFormModal' })
    },
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

html {
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

body {
  color: #fff;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 3rem 1rem 1rem 1rem;
  background-color: #1f253d;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>
