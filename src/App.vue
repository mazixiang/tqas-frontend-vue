<template>
  <div id="app">
    <div v-if="!userLoggedIn">
      <NavBar :end-navs="loginNavs" />
    </div>

    <div v-else-if="userIsAdmin">
      <NavBar
        :start-navs="adminNavs"
        :user-logged-in="userLoggedIn"
        :user-msg="`你好，管理员 ${this.currentUser}`"
      />
    </div>

    <div v-else-if="!userIsAdmin">
      <NavBar
        :start-navs="teacherNavs"
        :user-logged-in="userLoggedIn"
        :user-msg="`你好，教师 ${this.currentUser}`"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  components: { NavBar },
  data() {
    return {
      loginNavs: [
        { content: '教师登录', link: '/teacher/login' },
        { content: '管理员登录', link: '/admin/login' },
      ],
      adminNavs: [
        { content: '教学信息', link: '' },
        { content: '实验信息', link: '' },
        { content: '著作信息', link: '' },
        { content: '论文信息', link: '' },
        { content: '课题信息', link: '' },
        { content: '专利信息', link: '' },
        { content: '系数修改', link: '' },
      ],
      teacherNavs: [
        { content: '教学信息', link: '' },
        { content: '实验信息', link: '' },
        { content: '著作信息', link: '' },
        { content: '论文信息', link: '' },
        { content: '课题信息', link: '' },
        { content: '专利信息', link: '' },
      ],
    };
  },
  computed: {
    userLoggedIn() {
      return this.$store.state.currentUserId !== null;
    },
    userIsAdmin() {
      return this.userLoggedIn && this.$store.state.currentUserIsAdmin;
    },
    currentUser() {
      return this.$store.state.currentUserId;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
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
