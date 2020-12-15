<template>
  <LoginForm
    :form-data="teacherData"
    title="教师登录"
    @login="login"
    @register="register"
  />
</template>

<script>
import LoginForm from '@/components/LoginForm';
import { teacherLogin } from '@/api/teacher';

export default {
  name: 'Login',
  components: { LoginForm },
  metaInfo: {
    title: '用户登录',
  },
  data() {
    return {
      teacherData: {
        id: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      await teacherLogin(this.teacherData).then((response) => {
        if (response.status === 1) {
          this.$store.commit('updateCurrentUser', {
            id: this.teacherData.id,
            isAdmin: false,
          });
          this.$router.push('/teacher');
        }
      });
    },
    register() {
      this.$router.push('/teacher/register');
    },
  },
};
</script>
