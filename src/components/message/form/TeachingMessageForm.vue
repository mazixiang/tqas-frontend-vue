<template>
  <div class="container" id="teaching-message-form">
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>添加教学信息</h2>
    </div>
    <form @submit="$event.preventDefault()">
      <div class="row mb-3 form-group">
        <label for="course-name" class="col-md-3 col-form-label">
          课程名称
        </label>
        <div class="col-md-9">
          <input
            type="text"
            id="course-name"
            v-model="teachingMessage.courseName"
            class="col-md-9 form-control"
            placeholder="输入课程名称"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="course-period" class="col-md-3 col-form-label"
          >课程学时</label
        >
        <div class="col-md-9">
          <input
            type="text"
            id="course-period"
            v-model="teachingMessage.coursePeriod"
            class="col-md-9 form-control"
            placeholder="输入课程学时"
            required
          />
        </div>
      </div>

      <div class="row mb-3 form-group">
        <label for="class-name" class="col-md-3 col-form-label">课程名称</label>
        <div class="col-md-9">
          <input
            type="text"
            id="class-name"
            v-model="teachingMessage.className"
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
            v-model="teachingMessage.classSize"
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
  name: 'TeachingMsgForm',
  props: {
    teachingMessage: Object,
  },
};
</script>

<style scoped>
#teaching-message-form {
  width: 450px;
}
</style>
