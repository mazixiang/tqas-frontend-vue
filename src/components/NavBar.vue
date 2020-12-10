<template>
  <div class="navbar">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
      <router-link to="/" class="navbar-brand">
        <font-awesome-icon icon="home" />
        主页
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(nav, index) in navs" :key="index">
          <router-link to="{{ nav.link }}">{{ nav.content }}</router-link>
        </li>
      </ul>


    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navs: Array,
  },
};
</script>

<style scoped></style>
