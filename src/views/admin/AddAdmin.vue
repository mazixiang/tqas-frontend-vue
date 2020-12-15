<template>
  <div class="container">
    <UserForm :user-data="adminData" title="添加管理员" @submit="addAdmin()" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm';
import {addAdmin} from '@/api/admin';

export default {
  name: 'AddAdmin',
  metaInfo: {
    title: '添加管理员',
  },
  components: {
    UserForm,
  },
  data() {
    return {
      adminData: {
        id: '',
        name: '',
        gender: '男',
        password: '',
        emailAddress: '',
        phoneNumber: '',
      },
    };
  },
  methods: {
    async addAdmin() {
      await addAdmin(this.adminData).then((response) => {
        switch (response.status) {
          case 'success':
            this.$router.push('/admin/manage');
            break;
        }
      });
    },
  },
};
</script>
