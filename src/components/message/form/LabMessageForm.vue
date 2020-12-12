<template>
  <div class="container" id="lab-message-form-container">
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>添加实验信息</h2>
    </div>
    <form @submit="$event.preventDefault()">
      <div class="row mb-3 form-group">
        <label for="lab-name" class="col-md-3 col-form-label"> 实验名称 </label>
        <div class="col-md-9">
          <input
            type="text"
            id="lab-name"
            v-model="labMessage.courseName"
            class="col-md-9 form-control"
            placeholder="输入实验名称"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="lab-period" class="col-md-3 col-form-label">实验学时</label>
        <div class="col-md-9">
          <input
            type="text"
            id="lab-period"
            v-model="labMessage.coursePeriod"
            class="col-md-9 form-control"
            placeholder="输入实验学时"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="class-name" class="col-md-3 col-form-label">班级名称</label>
        <div class="col-md-9">
          <input
            type="text"
            id="class-name"
            v-model="labMessage.className"
            class="col-md-9 form-control"
            placeholder="输入班级名称"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="class-size" class="col-md-3 col-form-label">班级人数</label>
        <div class="col-md-9">
          <input
            type="text"
            id="class-size"
            v-model="labMessage.classSize"
            class="col-md-9 form-control"
            placeholder="输入班级人数"
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
  name: 'LabMessageForm',
  props: {
    labMessage: Object,
  },
};
</script>

<style scoped>
#lab-message-form-container {
  width: 450px;
}
</style>
