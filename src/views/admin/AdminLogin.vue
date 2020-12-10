<template>
  <LoginForm
    :form-data="formData"
    :show-register-btn="false"
    title="管理员登录"
    @login="login"
    @register="register"
  />
</template>

<script>
import axios from 'axios';
import LoginForm from '@/components/LoginForm';

import urls from '@/lib/global-variables';

export default {
  name: 'AdminLogin',
  components: { LoginForm },
  metaInfo: {
    title: '管理员登录',
  },
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      await axios
        .post(urls.adminLogin, JSON.stringify(this.formData))
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
      this.$router.push('/register');
    },
  },
};
</script>
