<template>
  <div class="container">
    <RegisterForm :form-data="formData" @register="register" />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm';
import axios from 'axios';
import urls from '@/lib/global-variables';

export default {
  name: 'Register',
  metaInfo: {
    title: '用户注册',
  },
  components: {
    RegisterForm,
  },
  data: function () {
    return {
      formData: {
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
    register: async function () {
      await axios
        .post(urls.register, this.formData, {
          headers: { 'content-type': 'application/x-www-form-unencoded' },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped></style>
