<template>
  <div class="header">
    <a class="logo">CompanyLogo</a>
    <div class="header-right">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/decks">Deck</NuxtLink>

      <NuxtLink to="/profile">Profile</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.nuxt-link-exact-active {
  background-color: dodgerblue !important;
  color: white !important;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
li {
  list-style: none;
}
</style>
