<template>
  <div class="container">
    <IssueMessageForm :issue-message="issueMessage" @submit="doSubmit" />
  </div>
</template>

<script>
import IssueMessageForm from '@/components/message/form/IssueMessageForm';
import { addIssueMessage } from '@/api/message/issueMessage';

export default {
  name: 'AddIssueMessage',
  components: { IssueMessageForm },
  metaInfo: {
    title: '添加课题信息',
  },
  data() {
    return {
      issueMessage: {
        id: '',
        ownerId: '',
        phase: '',
        rank: '',
      },
    };
  },
  methods: {
    async doSubmit() {
      await addIssueMessage(this.issueMessage).then((response) => {
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
