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
      <div
        id="navbarTogglerDemo01"
        class="collapse navbar-collapse text-center"
      >
        <div class="navbar-brand font-weight-bold ml-3">Hidden brand</div>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <NuxtLink to="/"
              ><font-awesome-icon :icon="['fas', 'home']" /> Home</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/decks"
              ><font-awesome-icon :icon="['fab', 'leanpub']" /> Deck</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/profile"
              ><font-awesome-icon :icon="['fas', 'id-card']" />
              Profile</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/settings"
              ><font-awesome-icon :icon="['fas', 'cog']" /> Settings</NuxtLink
            >
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
  margin-bottom: 25px;
  background: #394264;
  border-radius: 5px;
  height: 80px;
}

.header a {
  float: left;
  color: #fff;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 52px;
  svg {
    color: #9099b7;
  }
}
.navbar {
  padding: 0;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background: #50597b;
  border-bottom: 4px solid #11a8ab;
  text-decoration: none;
  &:last-child {
    border-radius: 5px;
  }
}

.nuxt-link-exact-active {
  // background-color: dodgerblue !important;
  // color: white !important;
  border-bottom: 4px solid #11a8ab;
  text-decoration: none;
}

.header-right {
  float: right;
}

@media screen and (max-width: 1000px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    z-index: 999;
    background: #394264;
  }
}
</style>
