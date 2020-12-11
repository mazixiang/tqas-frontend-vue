<template>
  <LoginForm
    :form-data="teacherData"
    title="教师登录"
    @login="login"
    @register="register"
  />
</template>

<script>
import LoginForm from '@/components/LoginForm';]
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
        switch (response.status) {
          case 'success':
            // TODO 教师主页
            this.$router.push('/teacher/:/home');
            break;
          case 'err-user-not-found':
            this.$router.push('/register');
            break;
          case 'err-wrong-password':
            this.$router.push('/login');
            break;
        }
      });
    },
    register() {
      this.$router.push('/teacher/register');
    },
  },
};
</script>
