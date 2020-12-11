<template>
  <div class="container">
    <div v-if="enterFromOtherEntrance" class="alert alert-danger">
      <h1>错误</h1>
      <hr />
      <p>你似乎从其他入口进入，请从管理员表单进入此页面</p>
    </div>
    <div v-else>
      <UserForm
        :user-data="adminData"
        :is-update-form="true"
        title="更新管理员信息"
        @submit="doUpdate()"
      />
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import queryAdminById from '@/api/admin/queryAdminById';
import updateAdmin from '@/api/admin/updateAdmin';

export default {
  name: 'UpdateAdmin',
  components: { UserForm },
  metaInfo: {
    title: '管理员信息修改',
  },
  async created() {
    console.log(this.$route.params.id);
    this.enterFromOtherEntrance = this.$route.params.id === undefined;

    if (!this.enterFromOtherEntrance) {
      this.adminId = this.$route.params.id;
      await queryAdminById().then((response) => {
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
      adminData: null,
      adminId: null,
    };
  },
  methods: {
    async doUpdate() {
      await updateAdmin(this.adminData).then((response) => {
        if (response.status === 'success') {
          this.$router.push('/admin/manage');
        }
      });
    },
  },
};
</script>

<style scoped></style>
