<template>
  <div class="container">
    <div class="row mb-3">
      <div
        class="col-md-4"
        v-for="(value, name, index) in workload"
        :key="index"
      >
        <div class="card my-2">
          <div class="card-body">
            <h3 class="card-title">{{ convertToChinese(name) }}工作量</h3>
            <p class="card-text display-6">{{ value.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkloadBoard',
  props: {
    workload: Object,
  },
  methods: {
    convertToChinese(eng) {
      let data = {
        teach: '教学',
        lab: '实验',
        issue: '科研',
        paper: '论文',
        work: '著作',
        patent: '专利',
      };
      return data[eng];
    },
  },
};
</script>

<style scoped></style>
