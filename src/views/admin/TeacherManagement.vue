<template>
  <div class="container">
    <UserTable
      :users="teachers"
      :is-teacher-table="true"
      title="教师信息管理"
      @delete-user="deleteTeacher($event)"
      @refresh-table="refreshTable"
      @add-user="addTeacher"
      @update-user="updateTeacher($event)"
      @assess-teacher="assessTeacher($event)"
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
        }
      });
    },
    async deleteTeacher(id) {
      await deleteTeacher(id).then((response) => {
        switch (response.status) {
          case 'success':
            this.refreshTable();
            break;
        }
      });
    },
    addTeacher() {
      this.$router.push({ name: 'AdminAddTeacher' });
    },
    updateTeacher(id) {
      this.$router.push({
        name: 'AdminUpdateTeacher',
        params: {
          id,
        },
      });
    },
    assessTeacher(id) {
      this.$router.push({
        name: 'AssessTeacher',
        params: {
          id,
        },
      });
    },
  },
  async created() {
    await this.refreshTable();
  },
};
</script>

<style scoped></style>
