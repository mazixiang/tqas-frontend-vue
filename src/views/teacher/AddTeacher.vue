<template>
  <div class="container">
    <UserForm :user-data="teacherData" title="添加教师" @submit="addTeacher" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import axios from 'axios';
import urls from '@/lib/global-variables';

export default {
  name: 'AddAdmin',
  metaInfo: {
    title: '添加教师',
  },
  components: {
    UserForm,
  },
  data: function () {
    return {
      teacherData: {
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
    async addTeacher() {
      await axios
        .post(urls.addTeacher, JSON.stringify(this.teacherData))
        .then((response) => {
          switch (response.data.status) {
            case 'success':
              this.$router.push('/teacherManagement');
              break;
          }
        });
    },
  },
};
</script>

<style scoped></style>
