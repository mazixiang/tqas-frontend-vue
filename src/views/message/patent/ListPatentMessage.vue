<template>
  <div class="container">
    <PatentMessageTable
      :patent-messages="messages"
      :is-admin="currentUserIsAdmin"
      @add-message="addMessage"
      @delete-message="doDelete($event)"
      @refresh-table="refreshTable"
    />
  </div>
</template>

<script>
import PatentMessageTable from '@/components/message/table/PatentMessageTable';
import {
  queryPatentMessagesByOwnerId,
  deletePatentMessage,
  queryAllPatentMessages,
} from '@/api/message/patentMessage';

export default {
  name: 'ListPatentMessage',
  components: { PatentMessageTable },
  metaInfo: {
    title: '专利信息',
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
        await queryPatentMessagesByOwnerId(ownerId).then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice;
          }
        });
      } else {
        await queryAllPatentMessages().then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      }
    },
    async doDelete(messageId) {
      await deletePatentMessage(messageId).then((response) => {
        if (response.status === 1) {
          this.refreshTable();
        }
      });
    },
    addMessage() {
      this.$router.push('/teacher/message/patent/add');
    },
  },
  async created() {
    await this.refreshTable();
  },
};
</script>

<style scoped></style>
