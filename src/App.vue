<template>
  <div id="app">
    <div v-if="$store.state.currentUserId == null" class="no-user">
      <NavBar :end-navs="loginNavs" />
    </div>

    <div v-else-if="$store.state.currentUserIsAdmin">

    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar},
  data() {
    return {
      loginNavs: [
        { content: '教师登录', link: '/teacher/login' },
        { content: '管理员登录', link: '/admin/login' },
      ],
      logoutNavs: [
        {content: '退出登陆', link: ''}
      ],
      adminNavs: [
        { content: '', link: ''}
      ],
      teacherNavs: [
        {content: '教学信息', link: ''},
        {content: '实验信息', link: ''},
        {content: '著作信息', link: ''},
        {content: '论文信息', link: ''},
        {content: '', link: ''},
        {content: '', link: ''}
      ]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
