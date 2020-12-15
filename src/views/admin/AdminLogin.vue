<template>
  <LoginForm
    :form-data="formData"
    :show-register-btn="false"
    title="管理员登录"
    @login="login"
  />
</template>

<script>
import { adminLogin } from '@/api/admin';
import LoginForm from '@/components/LoginForm';

export default {
  name: 'AdminLogin',
  components: { LoginForm },
  metaInfo: {
    title: '管理员登录',
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
      await adminLogin(this.formData).then((response) => {
        console.log(response);
        if (response.status === 1) {
          this.$store.dispatch('updateCurrentUser', {
            id: this.formData.id,
            isAdmin: true,
          });
          this.$router.push('/admin');
        }
      });
    },
  },
};
</script>
