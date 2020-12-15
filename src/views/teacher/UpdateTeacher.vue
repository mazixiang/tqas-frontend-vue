<template>
  <div class="container">
    <div v-if="enterFromOtherEntrance" class="alert alert-danger">
      <EnterFromOtherEntranceError />
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
import EnterFromOtherEntranceError from '@/components/error/EnterFromOtherEntranceError';

export default {
  name: 'UpdateTeacher',
  components: { EnterFromOtherEntranceError, UserForm },
  metaInfo: {
    title: '教师信息修改',
  },
  async created() {
    console.log(this.$route.params.id);
    this.enterFromOtherEntrance = this.$route.params.id === undefined;

    if (!this.enterFromOtherEntrance) {
      this.teacherId = this.$route.params.id;
      await queryTeacherById(this.teacherId).then((response) => {
        console.log(response);
        switch (response.status) {
          case 'success':
            this.teacherData = response.data;
            break;
        }
      });
    }
  },
  data() {
    return {
      enterFromOtherEntrance: true,
      teacherData: {
        id: '',
        name: '',
        gender: '男',
        password: '',
        emailAddress: '',
        phoneNumber: '',
      },
      teacherId: null,
    };
  },
  methods: {
    async doUpdate() {
      await updateTeacher(this.teacherData).then((response) => {
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
