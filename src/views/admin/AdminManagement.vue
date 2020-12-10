<template>
  <div class="container">
    <UserTable
      :users="admins"
      title="管理员管理"
      @delete-user="deleteAdmin($event)"
      @refresh-table="refreshTable()"
      @add-user="addAdmin()"
    />
  </div>
</template>

<script>
import UserTable from '@/components/UserTable';
import axios from 'axios';
import urls from '../../lib/global-variables';
export default {
  name: 'ManageAdmin',
  metaInfo: {
    title: '管理员信息管理',
  },
  components: { UserTable },
  data () {
    return {
      admins: [],
    };
  },
  methods: {
    async refreshTable() {
      await axios.get(urls.queryAllAdmins).then((response) => {
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
    async deleteAdmin() {
      await axios.get(urls.deleteAdmin, {params: {
        
        }}).then((response) => {
        console.log(response);
      });
    },
    addAdmin() {
      this.$router.push('/addAdmin');
    },
  },
  created() {
    this.refreshTable();
  },
};
</script>

<style scoped></style>
