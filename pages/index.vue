<template>
  <div id="root" class="">
    <div class="container">
      <div class="banner">
        <div class="thumbnail-banner">
          <img
            class="d-block w-100"
            src="~/assets/images/banner.jpg"
            alt="First slide"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.thumbnail-banner {
  height: 350px;
  margin-top: 2rem;
  img {
    background-position: center;
    background-repeat: center;
    background-size: cover;
    max-width: 100%;
    height: inherit;
  }
}
</style>
