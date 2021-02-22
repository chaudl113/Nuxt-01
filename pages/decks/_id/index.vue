<template>
  <section>
    <div class="container pt-5">
      <div class="text-center">
        <h3>Deck : {{ deck.name }}</h3>
        <div>
          <button type="button" class="btn btn-success">Start Now</button>
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="openModal('createCardModal')"
          >
            Create a card
          </button>
          <button
            type="button"
            class="btn btn-warning"
            @click.prevent="openModal('DeckFormModal')"
          >
            Edit a Deck
          </button>
        </div>
      </div>
      <hr class="divide" />
      <div class="comtainer">
        <div class="row">
          <CardList
            v-for="card in cards"
            :id="card._id"
            :key="card._id"
            :picture="card.picture"
            :keyword="card.keyword"
          />
        </div>
      </div>
    </div>
    <!-- modal -->
    <v-modal name="createCardModal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLongTitle" class="modal-title">
            Create A New Card
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click.prevent="closeModal('createCardModal')"
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
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click.prevent="closeModal('createCardModal')"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </v-modal>
  </section>
</template>

<script>
import axios from 'axios'

import CardList from '@/components/Cards/CardList.vue'

export default {
  components: {
    CardList,
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-learning-english-bb51c-default-rtdb.firebaseio.com/decks/${context.params.id}.json`
      )
      .then((response) => {
        return {
          deck: response.data,
        }
      })
      .catch((e) => {
        context.error(e)
      })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-hot-girl-l%C3%A0m-avt.jpg',
          keyword: 'beautiful girl',
        },
        {
          _id: 2,
          picture:
            'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-g%C3%A1i-xinh-t%C3%B3c-ng%E1%BA%AFn-che-m%E1%BA%B7t.jpg',
          keyword: 'beautiful girl',
        },
        {
          _id: 3,
          picture:
            'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-n%E1%BB%81n-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-girl-xinh-682x1024.jpg',
          keyword: 'beautiful girl',
        },
        {
          _id: 4,
          picture:
            'https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-%C4%91%E1%BA%B9p.jpg',
          keyword: 'beautiful girl',
        },
      ],
    }
  },
  methods: {
    openModal(name) {
      if (name === 'createCardModal') {
        this.$modal.open({ name: 'createCardModal' })
      } else if (name === 'DeckFormModal') {
        this.$modal.open({
          name: 'DeckFormModal',
          payload: { ...this.deck, id: this.$route.params.id },
        })
      }
    },
    closeModal(name) {
      if (name === 'createCardModal') {
        this.$modal.close({ name: 'createCardModal' })
      } else if (name === 'DeckFormModal') {
        this.$modal.close({ name: 'DeckFormModal' })
      }
    },
  },
}
</script>
