<template>
  <div class="container">
    <PatentMessageTable
      :patent-messages="messages"
      :is-admin="currentUserIsAdmin"
      @add-message="addMessage"
      @delete-message="doDelete($event)"
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
          switch (response.status) {
            case 'success':
              this.messages = response.data.slice;
              break;
          }
        });
      } else {
        await queryAllPatentMessages().then((response) => {
          switch (response.status) {
            case 'success':
              this.messages = response.data.slice();
              break;
          }
        });
      }
    },
    async doDelete(messageId) {
      await deletePatentMessage(messageId).then((response) => {
        switch (response.status) {
          case 'success':
            this.refreshTable();
            break;
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
