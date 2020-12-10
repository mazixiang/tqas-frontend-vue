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
import axios from 'axios';
import urls from '@/lib/global-variables';
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
      await axios.get(urls.queryAllTeachers).then((response) => {
        console.log(response);
        switch (response.data.status) {
          case 'success':
            this.admins = response.data.data.slice();
            break;
          case 'err-user-not-login':
            this.$router.push('/login');
            break;
        }
      });
    },
    async deleteTeacher() {
      await axios.get(urls.deleteTeacher).then((response) => {
        console.log(response);
      });
    },
    addTeacher() {
      this.$router.push('/addTeacher');
    },
  },
};
</script>

<style scoped></style>
