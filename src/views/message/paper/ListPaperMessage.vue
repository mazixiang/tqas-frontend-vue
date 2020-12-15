<template>
  <div class="container">
    <PaperMessageTable
      :paper-messages="messages"
      :is-admin="currentUserIsAdmin"
      @add-message="addMessage"
      @delete-message="doDelete($event)"
      @refresh-table="refreshTable"
    />
  </div>
</template>

<script>
import PaperMessageTable from '@/components/message/table/PaperMessageTable';
import {
  queryPaperMessagesByOwnerId,
  deletePaperMessage,
  queryAllPaperMessages,
} from '@/api/message/paperMessage';

export default {
  name: 'ListPaperMessage',
  metaInfo: {
    title: '论文信息',
  },
  components: { PaperMessageTable },
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
        await queryPaperMessagesByOwnerId(ownerId).then((response) => {
          console.log(response);
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      } else {
        await queryAllPaperMessages().then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      }
    },
    async doDelete(messageId) {
      await deletePaperMessage(messageId).then((response) => {
        if (response.status === 1) {
          this.refreshTable();
        }
      });
    },
    addMessage() {
      this.$router.push('/teacher/message/paper/add');
    },
  },
  async created() {
    await this.refreshTable();
  },
};
</script>

<style scoped></style>
