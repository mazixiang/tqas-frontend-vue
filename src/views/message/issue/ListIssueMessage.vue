<template>
  <div class="container">
    <IssueMessageTable
      :issue-messages="messages"
      :is-admin="currentUserIsAdmin"
      @add-message="addMessage"
      @delete-message="doDelete($event)"
      @refresh-table="refreshTable"
    />
  </div>
</template>

<script>
import IssueMessageTable from '@/components/message/table/IssueMessageTable';
import {
  queryIssueMessagesByOwnerId,
  deleteIssueMessage,
  queryAllIssueMessages,
} from '@/api/message/issueMessage';

export default {
  name: 'ListIssueMessage',
  components: {
    IssueMessageTable,
  },
  metaInfo: {
    title: '课题信息',
  },
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
        await queryIssueMessagesByOwnerId(ownerId).then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      } else {
        await queryAllIssueMessages().then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      }
    },
    async doDelete(messageId) {
      await deleteIssueMessage(messageId).then((response) => {
        if (response.status === 1) {
          this.refreshTable();
        }
      });
    },
    addMessage() {
      this.$router.push('/teacher/message/issue/add');
    },
  },
  async created() {
    await this.refreshTable();
  },
};
</script>

<style scoped></style>
