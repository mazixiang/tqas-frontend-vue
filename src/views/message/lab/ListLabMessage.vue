<template>
  <div class="container">
    <LabMessageTable
      :lab-messages="messages"
      :is-admin="currentUserIsAdmin"
      @delete-message="doDelete($delete)"
      @add-message="addMessage"
      @refresh-table="refreshTable"
    />
  </div>
</template>

<script>
import LabMessageTable from '@/components/message/table/LabMessageTable';
import {
  deleteLabMessage,
  queryLabMessagesByOwnerId,
  queryAllLabMessages,
} from '@/api/message/labMessage';

export default {
  name: 'ListLabMessage',
  metaInfo: { title: '实验信息' },
  components: { LabMessageTable },
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    currentUserIsAdmin() {
      return this.$store.state.currentUserIsAdmin;
    },
  },
  methods: {
    async refreshTable() {
      if (!this.currentUserIsAdmin) {
        let ownerId = this.$store.state.currentUserId;
        await queryLabMessagesByOwnerId(ownerId).then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      } else {
        await queryAllLabMessages().then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      }
    },
    async doDelete(messageId) {
      await deleteLabMessage(messageId).then((response) => {
        if (response.status === 1) {
          this.refreshTable();
        }
      });
    },
    addMessage() {
      this.$router.push('/teacher/message/lab/add');
    },
  },
  async created() {
    await this.refreshTable();
  },
};
</script>
