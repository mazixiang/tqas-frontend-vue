<template>
<div class="container">
  <div v-if="enterFromOtherEntrance" class="alert alert-danger">
    <h1>错误</h1>
    <hr>
    <p>你似乎从其他入口进入，请从管理员表单进入此页面</p>
  </div>
  <div v-else>
    <UserForm
      :user-data="adminData"
      @submit="doUpdate()"
    />
  </div>
</div>
</template>

<script>
import UserForm from "@/components/UserForm";
import queryAdminById from "@/api/admin/queryAdminById";
import updateAdmin from "@/api/admin/updateAdmin";

export default {
  name: "UpdateAdmin",
  components:{UserForm},
  created() {
    if (this.$route.params.id !== null) {
      this.enterFromOtherEntrance = false;
      this.adminId = this.$route.params.id;
    }
  },
  data() {
    return {
      enterFromOtherEntrance: true,
      adminData: null,
      adminId: null,
    }
  },
  methods: {
    async queryAdminById() {
      let response = await queryAdminById();

      if (response.status === 'success') {
        this.adminData = response.data;
      }

    },
    async doUpdate() {
      let response = await updateAdmin(this.adminData);

      if (response.status === 'success') {
        await this.$router.push('/admin/manage');
      }

    }
  }
}
</script>

<style scoped>

</style>