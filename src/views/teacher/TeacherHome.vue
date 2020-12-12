<template>
  <div class="container">
    <WorkloadBoard :workload="workload" />
  </div>
</template>

<script>
import WorkloadBoard from '@/components/WorkloadBoard';
import getWorkload from '@/api/getWorkload';
export default {
  name: 'TeacherHome',
  metaInfo: {
    title: '教师主页',
  },
  components: { WorkloadBoard },
  data() {
    return {
      workload: {},
    };
  },
  methods: {
    async getWorkload() {
      await getWorkload().then((response) => {
        switch (response.status) {
          case 'success':
            this.workload = response.data;
            break;
        }
      });
    },
  },
  async created() {
    await this.getWorkload();
  },
};
</script>

<style scoped></style>
