<template>
  <LoginForm :form-data="formData" title="教师登录" @login="login" @register="register" />
</template>

<script>
import axios from 'axios';
import LoginForm from '@/components/LoginForm';

import urls from '@/api/urls';

export default {
  name: 'Login',
  components: { LoginForm },
  metaInfo: {
    title: '用户登录',
  },
  data() {
    return {
      formData: {
        id: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      await axios
        .post(urls.login, JSON.stringify(this.formData))
        .then((response) => {
          switch (response.data.status) {
            case 'success':
              this.$router.push('/admin-panel');
              break;
            case 'user-not-found':
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
