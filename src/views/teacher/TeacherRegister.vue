<template>
  <div class="container">
    <UserForm :user-data="teacherData" title="用户注册" @submit="register" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import {addTeacher} from "@/api/teacher";

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
      teacherData: {
        id: '',
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
      await addTeacher(this.teacherData).then(response=> {
        switch (response.status) {
          case 'success':
            // TODO 修改教师主页
            this.$router.push('/teacher/home');
        }
      })
    },
  },
};
</script>

