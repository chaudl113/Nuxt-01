<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarTogglerDemo01" class="collapse navbar-collapse">
        <a class="navbar-brand font-weight-bold" href="#">Hidden brand</a>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/decks">Deck</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/profile">Profile</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/settings">Settings</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.header {
  border-radius: 25px 0 25px 0;
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
.header:hover {
  border-radius: 0 25px 0 25px;
  transition: 0.3s ease-in-out;
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
.nav-item {
  list-style: none;
  margin-right: 10px;
}
</style>
