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
} from '@/api/message/teachingMessage';

export default {
  name: 'ListTeachingMessage',
  components: { TeachingMessageTable },
  data() {
    return { messages: [] };
  },
  methods: {
    async refreshTable() {
      let ownerId = this.$store.state.currentUserId;
      await queryTeachingMessagesByOwnerId(ownerId).then((response) => {
        switch (response.status) {
          case 'success':
            this.messages = response.data.slice();
            break;
        }
      });
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
