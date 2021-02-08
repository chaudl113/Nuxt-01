<template>
  <div>
    <div class="container pt-5">
      <h1>List of your decks</h1>
      <ul class="cards">
        <li class="cards_item">
          <nuxt-link to="/decks/1">
            <div class="card">
              <div class="card_image">
                <img src="https://picsum.photos/500/300/?image=10" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Card Grid Layout</h2>
                <p class="card_text">
                  Demo of pixel perfect pure CSS simple responsive card grid
                  layout
                </p>
                <button class="btn card_btn">Read More</button>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=5" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <nuxt-link tag="button" to="/decks/2" class="btn card_btn"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=11" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <nuxt-link tag="button" to="/decks/2" class="btn card_btn"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=14" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <nuxt-link tag="button" to="/decks/2" class="btn card_btn"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=17" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <nuxt-link tag="button" to="/decks/2" class="btn card_btn"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=2" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <nuxt-link tag="button" to="/decks/2" class="btn card_btn"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deckID: '1',
    }
  },
  methods: {
    showDeck() {
      this.$router.push('/decks/' + this.deckID)
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

.btn {
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

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #57bdbd 40%, #d58fdf 100%);
}

.card_title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0;
}

.card_text {
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>
