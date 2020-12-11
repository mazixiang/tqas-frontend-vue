<template>
  <div class="container">
    <UserTable
      :users="teachers"
      title="教师信息管理"
      @delete-teacher="deleteTeacher($event)"
      @refresh-table="refreshTable()"
      @add-user="addTeacher()"
    />
  </div>
</template>

<script>
import UserTable from '@/components/UserTable';
import { queryAllTeachers, deleteTeacher } from '@/api/teacher';

export default {
  name: 'TeacherManagement',
  metaInfo: {
    title: '教师管理',
  },
  components: { UserTable },
  data() {
    return {
      teachers: [],
    };
  },
  methods: {
    async refreshTable() {
      await queryAllTeachers().then((response) => {
        switch (response.status) {
          case 'success':
            this.teachers = response.data.slice();
            break;
          case 'err-user-not-login':
            this.$router.push('/login');
            break;
          case 'err-user-not-admin':
            // TODO 未完成判断 User 是管理员的部分
            break;
        }
      });
    },
    async deleteTeacher(id) {
      // await axios.get(urls.deleteTeacher).then((response) => {
      //   console.log(response);
      // });
      await deleteTeacher(id).then((response) => {
        switch (response.status) {
          // TODO 修改管理教师页面的路径
          case 'success':
            this.$router.push('/teacherManagement');
            break;
        }
      });
    },
    addTeacher() {
      this.$router.push('/addTeacher');
    },
  },
};
</script>

<style scoped></style>
