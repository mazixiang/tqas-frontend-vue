<template>
  <div class="container" id="issue-message-form-container">
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>添加专利信息</h2>
    </div>
    <form @submit="$event.preventDefault()">
      <div class="row mb-3 form-group">
        <label for="issue-period" class="col-md-3 col-form-label">
          专利阶段
        </label>
        <div class="col-md-9">
          <input
            type="text"
            id="issue-period"
            v-model="patentMessage.phase"
            class="col-md-9 form-control"
            placeholder="输入专利阶段"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="patent-rank" class="col-md-3 col-form-label">
          专利排名
        </label>
        <div class="col-md-9">
          <input
            type="number"
            id="patent-rank"
            v-model.number="patentMessage.rank"
            class="form-control"
            placeholder="输入专利排名"
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
  name: 'PatentMessageForm',
  props: {
    patentMessage: Object,
  },
};
</script>

<style scoped>
#issue-message-form-container {
  width: 450px;
}
</style>
