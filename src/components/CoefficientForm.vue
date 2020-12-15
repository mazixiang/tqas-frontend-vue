<template>
  <div
    class="container flex-column justify-content-center align-items-center"
    id="coe-container"
  >
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>修改系数</h2>
    </div>
    <form @submit="doSubmit($event)">
      <div class="row mb-3 form-group">
        <label for="teach" class="col-md-4 col-form-label">教学系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="teach"
            v-model.number="coefficient.teach"
            class="form-control"
            placeholder="输入教学系数"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="lab" class="col-md-4 col-form-label">实验系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="lab"
            v-model.number="coefficient.lab"
            class="col-md-9 form-control"
            placeholder="输入实验系数"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="work" class="col-md-4 col-form-label">著作系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="work"
            v-model.number="coefficient.work"
            class="col-md-9 form-control"
            placeholder="输入著作系数"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="paper" class="col-md-4 col-form-label">论文系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="paper"
            v-model.number="coefficient.paper"
            class="col-md-9 form-control"
            placeholder="输入论文系数"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="issue" class="col-md-4 col-form-label">课题系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="issue"
            v-model.number="coefficient.issue"
            class="col-md-9 form-control"
            placeholder="输入课题系数"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="patent" class="col-md-4 col-form-label">专利系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="patent"
            v-model.number="coefficient.patent"
            class="col-md-9 form-control"
            placeholder="输入专利系数"
            required
          />
        </div>
      </div>

      <div
        class="row mb-3 btn-line d-flex justify-content-center align-items-center"
      >
        <div class="col col-md-12">
          <input type="submit" class="btn btn-outline-primary" value="提交" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CoefficientForm',
  props: {
    coefficient: Object,
  },
  methods: {
    doSubmit(event) {
      event.preventDefault();
      this.$emit('update-coefficient');
    },
  },
};
</script>

<style scoped>
#coe-container {
  width: 450px;
}
</style>
