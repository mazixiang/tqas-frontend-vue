<template>
  <div class="container">
    <div v-if="enterFromOtherEntrance" class="alert alert-danger">
      <h1>错误</h1>
      <hr />
      <p>你似乎从其他入口进入，请从管理员表单进入此页面</p>
    </div>
    <div v-else>
      <UserForm
        :user-data="teacherData"
        :is-update-form="true"
        title="更新教师信息"
        @submit="doUpdate()"
      />
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import { queryTeacherById, updateTeacher } from '@/api/teacher';

export default {
  name: 'UpdateTeacher',
  components: { UserForm },
  metaInfo: {
    title: '教师信息修改',
  },
  async created() {
    console.log(this.$route.params.id);
    this.enterFromOtherEntrance = this.$route.params.id === undefined;

    if (!this.enterFromOtherEntrance) {
      this.adminId = this.$route.params.id;
      await queryTeacherById().then((response) => {
        console.log(response);
        switch (response.status) {
          case 'success':
            this.adminData = response.target;
            break;
        }
      });
    }
  },
  data() {
    return {
      enterFromOtherEntrance: true,
      teacherData: null,
      teacherId: null,
    };
  },
  methods: {
    async doUpdate() {
      await updateTeacher(this.adminData).then((response) => {
        if (response.status === 'success') {
          this.$router.push(this.nextPath);
        }
      });
    },
  },
  computed: {
    nextPath() {
      if (this.$store.state.currentUserIsAdmin) {
        return '/teacher/manage';
      } else {
        // 修改教师主页路径
        return '/teacher/home';
      }
    },
  },
};
</script>

<style scoped></style>
