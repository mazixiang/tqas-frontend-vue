<template>
  <div class="container">
    <PatentMessageForm :patent-message="patentMessage" @submit="doSubmit" />
  </div>
</template>

<script>
import PatentMessageForm from '@/components/message/form/PatentMessageForm';
import { addPatentMessage } from '@/api/message/patentMessage';

export default {
  name: 'AddPatentMessage',
  components: { PatentMessageForm },
  metaInfo: {
    title: '添加专利信息',
  },
  data() {
    return {
      patentMessage: {
        id: '',
        ownerId: '',
        phase: '',
        rank: '',
      },
    };
  },
  methods: {
    async doSubmit() {
      await addPatentMessage(this.patentMessage).then((response) => {
        switch (response.status) {
          case 'success':
            this.$router.back();
            break;
        }
      });
    },
  },
  created() {
    this.patentMessage.ownerId = this.$store.state.currentUserId;
  },
};
</script>

<style scoped></style>
