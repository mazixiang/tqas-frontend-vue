<template>
  <div class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-toggle"
        aria-controls="navbar-toggle"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-toggle">
        <router-link :to="homeLink" class="navbar-brand">
          <font-awesome-icon icon="home" />
          主页
        </router-link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(nav, index) in startNavs" :key="index">
            <router-link :to="nav.link" class="nav-link">
              {{ nav.content }}
            </router-link>
          </li>
        </ul>

        <span class="navbar-text flex-row flex-wrap ms-md-auto">
          {{ userMsg }}
        </span>

        <ul class="navbar-nav flex-row flex-wrap ms-md-4" v-if="userLoggedIn">
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="$emit('update-user')">
              修改信息
            </button>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="$emit('logout')">
              退出登录
            </button>
          </li>
        </ul>

        <ul class="navbar-nav flex-row flex-wrap ms-md-4" v-if="!userLoggedIn">
          <li class="nav-item" v-for="(nav, index) in endNavs" :key="index">
            <router-link :to="nav.link" class="nav-link">
              {{ nav.content }}
            </router-link>
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
    homeLink: String,
    startNavs: Array,
    endNavs: Array,
    userMsg: String,
    userLoggedIn: {
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
