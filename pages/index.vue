<template>
  <div id="root" class="">
    <div class="container-fluid p-0">
      <div class="banner">
        <div class="thumbnail-banner">
          <img
            class="banner-img w-100"
            src="~/assets/images/banner.jpg"
            alt="First slide"
          />
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row">
        <!-- <div v-for="deck in topDecks" :key="deck._id" class="col-md-4"></div> -->
        <HomeList
          v-for="deck in topDecks"
          :key="deck._id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeList from '@/components/Home/HomeList.vue'
export default {
  components: { HomeList },
  data() {
    return {
      topDecks: [
        {
          _id: 1,
          thumbnail:
            'http://demo.holathemes.com/coursterhtml/assets/images/course/img-1.jpg',
          name: 'Learn English',
          description: 'Vivamus suscipit tortor eget felis porttitor volutpat',
        },
        {
          _id: 2,
          thumbnail:
            'http://demo.holathemes.com/coursterhtml/assets/images/course/img-3.jpg',
          name: 'Learn English',
          description: 'Vivamus suscipit tortor eget felis porttitor volutpat',
        },
        {
          _id: 3,
          thumbnail:
            'http://demo.holathemes.com/coursterhtml/assets/images/course/img-2.jpg',
          name: 'Learn English',
          description: 'Vivamus suscipit tortor eget felis porttitor volutpat',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.thumbnail-banner {
  height: 550px;
  margin-top: 2rem;
  overflow: hidden;
  border-radius: 10px;

  img {
    background-position: center;
    background-repeat: center;
    background-size: cover;
    max-width: 100%;
    height: inherit;
    border-radius: 10px;
    transition: transform 1.2s;
  }
}

.banner-img:hover {
  -moz-box-shadow: 0 0 10px #ccc;
  -webkit-box-shadow: 0 0 10px #ccc;
  box-shadow: 0 0 10px #ccc;
  transform: scale(1.5);
}
@media only screen and (max-device-width: 480px) {
  .thumbnail-banner {
    height: 150px;
  }
}
</style>
