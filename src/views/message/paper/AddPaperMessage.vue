<template>
  <div class="container">
    <PaperMessageForm :paper-message="paperMessage" />
  </div>
</template>

<script>
import PaperMessageForm from '@/components/message/form/PaperMessageForm';
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
        phase: '',
        rank: '',
      },
    };
  },
};
</script>

<style scoped></style>
