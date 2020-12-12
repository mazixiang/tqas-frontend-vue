<template>
  <div class="container">
    <TeachingMsgForm :teaching-message="teachingMessage" @submit="doAdd" />
  </div>
</template>

<script>
import TeachingMsgForm from '@/components/message/form/TeachingMessageForm';
import { addTeachingMessage } from '@/api/message/teachingMessage';

export default {
  name: 'AddTeachingMsg',
  metaInfo: {
    title: '教学信息添加',
  },
  components: {
    TeachingMsgForm,
  },
  data() {
    return {
      teachingMessage: {
        id: '',
        ownerId: '',
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
