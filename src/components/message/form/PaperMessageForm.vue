<template>
  <div class="container" id="paper-message-form-container">
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>添加论文信息</h2>
    </div>
    <form @submit="doSubmit($event)">
      <div class="row mb-3 form-group">
        <label for="paper-period" class="col-md-3 col-form-label">
          论文期刊
        </label>
        <div class="col-md-9">
          <input
            type="text"
            id="paper-period"
            v-model="paperMessage.periodical"
            class="col-md-9 form-control"
            placeholder="输入论文期刊"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="paper-rank" class="col-md-3 col-form-label">
          论文排名
        </label>
        <div class="col-md-9">
          <input
            type="number"
            id="paper-rank"
            v-model.number="paperMessage.rank"
            class="form-control"
            placeholder="输入论文排名"
            required
          />
        </div>
      </div>

      <div
        class="row mb-3 form-group d-flex justify-content-center align-items-center"
      >
        <div class="col col-md-12">
          <input type="submit" class="btn btn-outline-primary" value="添加" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaperMessageForm',
  props: {
    paperMessage: Object,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    doSubmit(event) {
      event.preventDefault();
      this.$emit('submit');
    },
  },
};
</script>

<style scoped>
#paper-message-form-container {
  width: 450px;
}
</style>
