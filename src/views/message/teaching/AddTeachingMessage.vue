<template>
  <div class="container">
    <TeachingMessageForm :teaching-message="teachingMessage" @submit="doAdd" />
  </div>
</template>

<script>
import TeachingMessageForm from '@/components/message/form/TeachingMessageForm';
import { addTeachingMessage } from '@/api/message/teachingMessage';

export default {
  name: 'AddTeachingMessage',
  metaInfo: {
    title: '教学信息添加',
  },
  components: {
    TeachingMessageForm,
  },
  data() {
    return {
      teachingMessage: {
        id: '',
        ownerId: this.$store.state.currentUserId,
        courseName: '',
        coursePeriod: '',
        className: '',
        classSize: '',
      },
    };
  },
  methods: {
    async doAdd() {
      await addTeachingMessage(this.teachingMessage).then((response) => {
        if (response.status === 1) {
          this.$router.back();
        }
      });
    },
  },
};
</script>

<style scoped></style>
