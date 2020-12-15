<template>
  <div class="container">
    <UserTable
      :users="admins"
      title="管理员管理"
      @delete-user="deleteAdmin($event)"
      @refresh-table="refreshTable()"
      @add-user="addAdmin()"
      @update-user="updateAdmin($event)"
    />
  </div>
</template>

<script>
import UserTable from '@/components/UserTable';
import { queryAllAdmins, deleteAdmin } from '@/api/admin';

export default {
  name: 'ManageAdmin',
  metaInfo: {
    title: '管理员信息管理',
  },
  components: { UserTable },
  data() {
    return {
      admins: [],
    };
  },
  methods: {
    async refreshTable() {
      await queryAllAdmins().then((response) => {
        switch (response.status) {
          case 'success':
            this.admins = response.data.slice();
            break;
          case 'err-admin-not-login':
            this.$router.push('/admin/login');
        }
      });
    },
    async deleteAdmin(id) {
      let response = deleteAdmin(id);
      if (response.status === 'success') {
        await this.refreshTable();
      }
    },
    addAdmin() {
      this.$router.push('/admin/add');
    },
    updateAdmin(id) {
      this.$router.push({
        name: 'UpdateAdmin',
        params: {
          id,
        },
      });
    },
  },
  created() {
    this.refreshTable();
  },
};
</script>

<style scoped></style>
