<template>
  <div class="container">
    <WorkMessageTable
      :work-messages="messages"
      :is-admin="currentUserIsAdmin"
      @delete-message="doDelete($event)"
      @add-message="$router.push('/teacher/message/work/add')"
      @refresh-table="refreshTable"
    />
  </div>
</template>

<script>
import WorkMessageTable from '@/components/message/table/WorkMessageTable';
import {
  queryWorkMessagesByOwnerId,
  deleteWorkMessage,
  queryAllWorkMessages,
} from '@/api/message/workMessage';

export default {
  name: 'ListWorkMessage',
  metaInfo: { title: '著作信息' },
  components: { WorkMessageTable },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    async refreshTable() {
      if (!this.currentUserIsAdmin) {
        let ownerId = this.$store.state.currentUserId;
        await queryWorkMessagesByOwnerId(ownerId).then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      } else {
        await queryAllWorkMessages().then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      }
    },
    async doDelete(messageId) {
      await deleteWorkMessage(messageId).then((response) => {
        if (response.status === 1) {
          this.refreshTable();
        }
      });
    },
  },
  async created() {
    await this.refreshTable();
  },
  computed: {
    currentUserIsAdmin() {
      return this.$store.state.currentUserIsAdmin;
    },
  },
};
</script>

<style scoped></style>
