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
        switch (response.status) {
          case 'success':
            this.$router.back();
            break;
        }
      });
    },
  },
};
</script>

<style scoped></style>
