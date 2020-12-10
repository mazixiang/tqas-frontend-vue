<template>
  <div class="container">
    <UserForm :user-data="userData" title="用户注册" @submit="register" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import axios from 'axios';
import urls from '@/lib/global-variables';

export default {
  name: 'Register',
  metaInfo: {
    title: '用户注册',
  },
  components: {
    UserForm,
  },
  data() {
    return {
      userData: {
        username: '',
        name: '',
        gender: '男',
        password: '',
        emailAddress: '',
        phoneNumber: '',
      },
    };
  },
  methods: {
    async register() {
      await axios
        .post(urls.register, JSON.stringify(this.userData))
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped></style>
