<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid py-1">
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
            <router-link :to="nav.link" class="nav-link">
              {{ nav.content }}
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <li class="nav-item" v-for="(nav, index) in endNavs" :key="index">
            <router-link :to="nav.link" class="nav-link">
              {{ nav.content }}
            </router-link>
          </li>
          <li class="nav-item" v-if="showLogoutBtn">
            <button class="ntn btn-link" @click="$emit('logout')">退出登录</button>
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
    endNavs: Array,
    showLogoutBtn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.navbar {
  margin-bottom: 3vh;
}
</style>
