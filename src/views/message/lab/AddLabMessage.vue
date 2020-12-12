<template>
  <div class="container">
    <LabMessageForm :lab-message="labMessage" @submit="doAdd" />
  </div>
</template>

<script>
import LabMessageForm from '@/components/message/form/LabMessageForm';
import { addLabMessage } from '@/api/message/labMessage';

export default {
  name: 'AddLabMessage',
  metaInfo: {
    title: '实验信息添加',
  },
  components: {
    LabMessageForm,
  },
  data() {
    return {
      labMessage: {
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
      await addLabMessage(this.labMessage).then((response) => {
        switch (response.status) {
          case 'success':
            this.$router.back();
        }
      });
    },
  },
};
</script>
