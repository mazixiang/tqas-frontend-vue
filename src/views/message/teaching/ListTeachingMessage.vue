<template>
  <div class="container">
    <TeachingMessageTable
      :teaching-messages="messages"
      :is-admin="currentUserIsAdmin"
      @delete-message="doDelete($event)"
      @add-message="addMessage"
    />
  </div>
</template>

<script>
import TeachingMessageTable from '@/components/message/table/TeachingMessageTable';
import {
  deleteTeachingMessage,
  queryTeachingMessagesByOwnerId,
  queryAllTeachingMessages,
} from '@/api/message/teachingMessage';

export default {
  name: 'ListTeachingMessage',
  metaInfo: { title: '教学信息' },
  components: { TeachingMessageTable },
  data() {
    return { messages: [] };
  },
  methods: {
    async refreshTable() {
      if (!this.currentUserIsAdmin) {
        let ownerId = this.$store.state.currentUserId;
        await queryTeachingMessagesByOwnerId(ownerId).then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      } else {
        await queryAllTeachingMessages().then((response) => {
          if (response.status === 1) {
            this.messages = response.data.slice();
          }
        });
      }
    },
    async doDelete(messageId) {
      await deleteTeachingMessage(messageId).then((response) => {
        switch (response.status) {
          case 'success':
            this.refreshTable();
            break;
        }
      });
    },
    addMessage() {
      this.$router.push('/teacher/message/teaching/add');
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
