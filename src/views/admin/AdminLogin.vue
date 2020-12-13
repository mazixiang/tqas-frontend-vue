<template>
  <LoginForm
    :form-data="formData"
    :show-register-btn="false"
    title="管理员登录"
    @login="login"
  />
</template>

<script>
import adminLogin from '@/api/admin/adminLogin';
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
        if (response.status === 1) {
          this.$store.commit({
            type: "updateCurrentUser",
            newUser: {id: this.formData.id, isAdmin: true}
          });
          this.$router.push('/admin')
        } else {
          this.$router.push('/login/admin');
        }
      });
    },
  },
};
</script>
