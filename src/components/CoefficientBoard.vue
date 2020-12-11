<template>
  <div class="container">
    <div class="row mb-3">
      <div
        class="col-md-4"
        v-for="(value, name, index) in coefficients"
        :key="index"
      >
        <div class="card my-2">
          <div class="card-body">
            <h3 class="card-title">{{ convertToChinese(name) }}系数</h3>
            <p class="card-text display-6">{{ value }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-3 d-flex align-items-center justify-content-center">
      <div class="col col-md-4">
        <button
          class="btn btn-outline-primary"
          style="width: 30%"
          @click="$emit('edit-coefficient')"
        >
          更新系数
        </button>
      </div>

      <div class="col col-md-4">
        <button
          class="btn btn-outline-primary"
          style="width: 30%"
          @click="$emit('manage-teacher')"
        >
          管理教师
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoefficientBoard',
  props: {
    coefficients: {
      type: Object,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    convertToChinese(eng) {
      let data = {
        teach: '教学',
        lab: '实验',
        work: '著作',
        paper: '论文',
        issue: '课题',
        patent: '专利',
      };
      return data[eng];
    },
  },
};
</script>

<style scoped></style>
