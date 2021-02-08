<template>
  <div class="card-list col-md-3">
    <div class="card">
      <img :src="picture" :alt="`Picture of ${id}`" />
    </div>

    <h2>{{ keyword }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-list {
  display: block;
  margin: 0 auto;
  padding: 0;
  font-size: 0;
  text-align: center;
  list-style: none;
}
.card {
  display: inline-block;
  max-width: 20rem;
  height: 18rem;
  margin: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;
  &:hover {
    transform: translateY(-0.5rem) scale(1.0125);
    box-shadow: 0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5);
  }
  img {
    height: 100%;
    width: 100%;
    vertical-align: middle;
  }
}
</style>
