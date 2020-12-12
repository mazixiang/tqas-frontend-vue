<template>
  <div class="container">
    <LabMessageTable
      :lab-messages="messages"
      :is-admin="currentUserIsAdmin"
      @delete-message="doDelete($delete)"
      @add-message="addMessage"
    />
  </div>
</template>

<script>
import LabMessageTable from '@/components/message/table/LabMessageTable';
import {
  deleteLabMessage,
  queryLabMessagesByOwnerId,
} from '@/api/message/labMessage';

export default {
  name: 'ListLabMessage',
  components: { LabMessageTable },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    async refreshTable() {
      let ownId = this.$store.state.currentUserId;
      await queryLabMessagesByOwnerId(ownId).then((response) => {
        switch (response.status) {
          case 'success':
            this.messages = response.data.slice();
            break;
        }
      });
    },
    async doDelete(messageId) {
      await deleteLabMessage(messageId).then((response) => {
        switch (response.status) {
          case 'success':
            this.refreshTable();
            break;
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
  computed: {
    currentUserIsAdmin() {
      return this.$store.state.currentUserIsAdmin;
    },
  },
};
</script>
