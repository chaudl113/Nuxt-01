<template>
  <li class="cards_item">
    <nuxt-link :to="`/decks/${id}`">
      <div class="card">
        <div class="card_image">
          <img :src="thumbnail" :alt="`Thumbnail of ${name}`" />
        </div>
        <div class="card_content">
          <h2 class="card_title">{{ name }}</h2>
          <p class="card_text">
            {{ description }}
          </p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, default: '' },
    thumbnail: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
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
  border-radius: 0.6rem;
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
