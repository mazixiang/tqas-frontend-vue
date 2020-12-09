<template>
  <LoginForm :form-data="formData" @login="login" @register="register" />
</template>

<script>
import axios from 'axios';
import LoginForm from '@/components/LoginForm';

import urls from '../lib/global-variables';

export default {
  name: 'Login',
  components: { LoginForm },
  metaInfo: {
    title: '用户登录',
  },
  data: function () {
    return {
      formData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login: async function () {
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
    register: function () {
      this.$router.push('/register');
    },
  },
};
</script>
