<template>
  <div class="container">
    <WorkMessageTable
      :work-messages="messages"
      :is-admin="currentUserIsAdmin"
      @add-message="$router.push('/teacher/message/work/add')"
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
          switch (response.status) {
            case 'success':
              this.messages = response.data.slice();
              break;
          }
        });
      } else {
        await queryAllWorkMessages().then((response) => {
          switch (response.status) {
            case 'success':
              this.messages = response.data.slice();
              break;
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
