<template>
  <div
    class="container flex-column justify-content-center align-items-center"
    id="coe-container"
  >
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>修改系数</h2>
    </div>
    <form @submit="$event.preventDefault()">
      <div class="row mb-3 form-group">
        <label for="teach" class="col-md-4 col-form-label">教学系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="teach"
            v-model="coefficient.teach"
            class="form-control"
            placeholder="输入用户名"
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="lab" class="col-md-4 col-form-label">实验系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="lab"
            v-model="coefficient.lab"
            class="col-md-9 form-control"
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="work" class="col-md-4 col-form-label">著作系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="work"
            v-model="coefficient.work"
            class="col-md-9 form-control"
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="paper" class="col-md-4 col-form-label">论文系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="paper"
            v-model="coefficient.paper"
            class="col-md-9 form-control"
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="issue" class="col-md-4 col-form-label">课题系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="issue"
            v-model="coefficient.issue"
            class="col-md-9 form-control"
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="patent" class="col-md-4 col-form-label">专利系数</label>
        <div class="col-md-4">
          <input
            type="text"
            id="patent"
            v-model="coefficient.patent"
            class="col-md-9 form-control"
          />
        </div>
      </div>

      <div
        class="row mb-3 btn-line d-flex justify-content-center align-items-center"
      >
        <div class="col col-md-12">
          <button
            class="btn btn-outline-primary"
            @click="$emit('update-coefficient')"
          >
            提交
          </button>
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
};
</script>

<style scoped>
#coe-container {
  width: 300px;
}
</style>
