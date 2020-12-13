<template>
  <div class="container">
    <PaperMessageForm :paper-message="paperMessage" @submit="doSubmit" />
  </div>
</template>

<script>
import PaperMessageForm from '@/components/message/form/PaperMessageForm';
import { addPaperMessage } from '@/api/message/paperMessage';

export default {
  name: 'AddPaperMessage',
  components: { PaperMessageForm },
  metaInfo: {
    title: '添加论文信息',
  },
  data() {
    return {
      paperMessage: {
        id: '',
        ownerId: '',
        periodical: '',
        rank: '',
      },
    };
  },
  methods: {
    async doSubmit() {
      await addPaperMessage(this.paperMessage).then((response) => {
        if (response.status === 1) {
          this.$router.back();
        }
      });
    },
  },
};
</script>

<style scoped></style>
