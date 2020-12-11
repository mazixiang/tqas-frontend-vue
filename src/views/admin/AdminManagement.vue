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
import queryAllAdmins from '@/api/admin/queryAllAdmins';
import deleteAdmin from '@/api/admin/deleteAdmin';

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
      // await axios.get(urls.queryAllAdmins).then((response) => {
      //   console.log(response);
      //   switch (response.data.status) {
      //     case 'success':
      //       this.admins = response.data.data.slice();
      //       break;
      //     case 'err-user-not-login':
      //       this.$router.push('/login');
      //       break;
      //   }
      // });

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
      switch (response.status) {
        case 'success':
          console.log(response);
      }
    },
    addAdmin() {
      this.$router.push('/addAdmin');
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
