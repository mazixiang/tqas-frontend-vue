<template>
  <div class="container-fluid px-0" id="app">
    <NavBar
      :start-navs="startNavs"
      :end-navs="endNavs"
      :user-logged-in="userLoggedIn"
      :user-msg="userMsg"
      :home-link="homeLink"
      @update-user="goUpdate"
      @logout="logout"
    />

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
        { content: '教师登录', link: '/login/teacher' },
        { content: '管理员登录', link: '/login/admin' },
      ],
      adminNavs: [
        { content: '教学信息', link: '/admin/message/teaching' },
        { content: '实验信息', link: '/admin/message/lab' },
        { content: '著作信息', link: '/admin/message/work' },
        { content: '论文信息', link: '/admin/message/paper' },
        { content: '课题信息', link: '/admin/message/issue' },
        { content: '专利信息', link: '/admin/message/patent' },
        { content: '系数修改', link: '/admin/updateCoefficient' },
        { content: '管理教师', link: '/admin/manageTeacher' },
      ],
      teacherNavs: [
        { content: '教学信息', link: '/teacher/message/teaching' },
        { content: '实验信息', link: '/teacher/message/lab' },
        { content: '著作信息', link: '/teacher/message/work' },
        { content: '论文信息', link: '/teacher/message/paper' },
        { content: '课题信息', link: '/teacher/message/issue' },
        { content: '专利信息', link: '/teacher/message/patent' },
      ],
    };
  },
  methods: {
    goUpdate() {
      let nextRoute = this.userIsAdmin ? 'updateAdmin' : 'updateTeacher';

      this.$router.push({
        name: nextRoute,
        params: {
          id: this.$store.state.currentUserId,
        },
      });
    },
    logout() {
      this.$store.commit('userLogout');
    },
  },
  computed: {
    startNavs() {
      if (!this.userLoggedIn) {
        return [];
      } else if (!this.userIsAdmin) {
        return this.teacherNavs;
      } else {
        return this.adminNavs;
      }
    },
    endNavs() {
      if (!this.userLoggedIn) {
        return this.loginNavs;
      } else {
        return [];
      }
    },
    userMsg() {
      if (!this.userLoggedIn) {
        return '';
      } else if (!this.userIsAdmin) {
        return `你好，教师 ${this.currentUser}`;
      } else {
        return `你好，管理员 ${this.currentUser}`;
      }
    },
    homeLink() {
      if (!this.userLoggedIn) {
        return '/';
      } else if (!this.userIsAdmin) {
        return '/teacher';
      } else {
        return '/admin';
      }
    },
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
  width: 100vw;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
