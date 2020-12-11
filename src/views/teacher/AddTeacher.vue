<template>
  <div class="container">
    <UserForm :user-data="teacherData" title="添加教师" @submit="doAdd" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import { addTeacher } from '@/api/teacher';

export default {
  name: 'AddAdmin',
  metaInfo: {
    title: '添加教师',
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
    async doAdd() {
      await addTeacher(this.teacherData).then((response) => {
        switch (response.status) {
          case 'success':
            // TODO 修改管理教师的页面
            this.$router.push('/admin/manageTeacher');
        }
      });
    },
  },
};
</script>

<style scoped></style>
