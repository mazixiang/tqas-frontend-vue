<template>
  <div class="container">
    <div v-if="enterFromOtherEntrance">
      <EnterFromOtherEntranceError />
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
import EnterFromOtherEntranceError from '@/components/error/EnterFromOtherEntranceError';
import { queryAdminById, updateAdmin } from '@/api/admin';

export default {
  name: 'UpdateAdmin',
  components: { EnterFromOtherEntranceError, UserForm },
  metaInfo: {
    title: '管理员信息修改',
  },
  async created() {
    console.log(this.$route.params.id);
    this.enterFromOtherEntrance = this.$route.params.id === undefined;

    if (!this.enterFromOtherEntrance) {
      this.adminId = this.$route.params.id;
      await queryAdminById(this.adminId).then((response) => {
        console.log(response);
        // switch (response.status) {
        //   case 'success':
        //     this.adminData = response.data;
        //     break;
        // }
        if (response.status === 'success') {
          this.adminData = response.data;
        }
      });
    }
  },
  data() {
    return {
      enterFromOtherEntrance: true,
      adminData: {
        id: '',
        name: '',
        gender: '',
        password: '',
        email: '',
        phone: '',
      },
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
