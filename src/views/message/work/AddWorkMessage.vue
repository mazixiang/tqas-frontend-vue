<template>
  <div class="container">
    <WorkMessageForm :work-message="workMessage" />
  </div>
</template>

<script>
import WorkMessageForm from '@/components/message/form/WorkMessageForm';
import { addWorkMessage } from '@/api/message/workMessage';

export default {
  name: 'AddWorkMessage',
  metaInfo: {
    title: '著作信息添加',
  },
  components: { WorkMessageForm },
  data() {
    return {
      workMessage: {
        id: '',
        ownerId: '',
        date: '',
        rank: '',
      },
    };
  },
  methods: {
    async doAdd() {
      await addWorkMessage(this.workMessage).then(response => {
        switch (response.status) {
          case 'success': this.$router.back();
        }
      })
    },
  },
};
</script>

<style scoped></style>
