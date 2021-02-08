<template>
  <div>
    <DefaulHearder />
    <Nuxt />
    <DefaulFooter />
  </div>
</template>
<script>
import DefaulHearder from '@/components/Header/DefaulHearder.vue'
import DefaulFooter from '@/components/Footer/DefaulFooter.vue'

export default {
  components: {
    DefaulHearder,
    DefaulFooter,
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
