<template>
  <div class="container">
    <UserForm :user-data="adminData" title="添加管理员" @submit="addAdmin()" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import axios from 'axios';
import urls from '@/lib/global-variables';

export default {
  name: 'AddAdmin',
  metaInfo: {
    title: '添加管理员',
  },
  components: {
    UserForm,
  },
  data: function () {
    return {
      adminData: {
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
    async addAdmin() {
      await axios
        .post(urls.addAdmin, JSON.stringify(this.adminData))
        .then((response) => {
          switch (response.data.status) {
            case 'success':
              this.$router.push('/adminManagement');
              break;
          }
        });
    },
  },
};
</script>

<style scoped></style>
