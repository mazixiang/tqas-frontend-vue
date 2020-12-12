<template>
  <div class="container" id="work-message-form-container">
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>添加著作信息</h2>
    </div>
    <form @submit="$event.preventDefault()">
      <div class="row mb-3 form-group">
        <label for="work-date" class="col-md-3 col-form-label">
          著作日期
        </label>
        <div class="col-md-9">
          <input
            type="date"
            id="work-date"
            v-model="workMessage.date"
            class="form-control"
            placeholder="选择日期"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="work-rank" class="col-md-3 col-form-label">
          著作排名
        </label>
        <div class="col-md-9">
          <input
            type="number"
            id="work-rank"
            v-model.number="workMessage.coursePeriod"
            class="form-control"
            placeholder="输入著作排名"
            required
          />
        </div>
      </div>

      <div
        class="row mb-3 form-group d-flex justify-content-center align-items-center"
      >
        <div class="col col-md-12">
          <button class="btn btn-outline-primary" @click="$emit('submit')">
            添加
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'WorkMessageForm',
  props: {
    workMessage: Object,
  },
};
</script>

<style scoped>
#work-message-form-container {
  width: 450px;
}
</style>
