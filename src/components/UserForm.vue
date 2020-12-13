<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center my-2">
      <h2>{{ title }}</h2>
    </div>
    <form @submit="doSubmit($event)">
      <div class="row mb-3">
        <label for="username" class="col-md-3 col-form-label">工号</label>
        <div class="col-md-9">
          <input
            type="text"
            id="username"
            v-model="userData.id"
            class="col-md-9 form-control"
            placeholder="输入工号"
            :disabled="isUpdateForm"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="name" class="col-md-3 col-form-label">姓名</label>
        <div class="col-md-9">
          <input
            type="text"
            id="name"
            v-model="userData.name"
            class="col-md-9 form-control"
            placeholder="输入姓名"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-3">
          <div class="col-form-label">性别</div>
        </div>
        <div class="col-md-9 d-flex align-items-center">
          <div class="form-check form-check-inline">
            <input
              type="radio"
              id="male"
              value="男"
              v-model="userData.gender"
              class="form-check-input"
              checked
            />
            <label for="male" class="form-check-label">男</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              type="radio"
              id="female"
              value="女"
              v-model="userData.gender"
              class="form-check-input"
            />
            <label for="female" class="form-check-label">女</label>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <label for="password" class="col-md-3 col-form-label">密码</label>
        <div class="col-md-9">
          <input
            type="password"
            id="password"
            v-model="userData.password"
            class="col-md-9 form-control"
            placeholder="输入密码"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="email-address" class="col-md-3 col-form-label">邮箱</label>
        <div class="col-md-9">
          <input
            type="email"
            id="email-address"
            v-model="userData.emailAddress"
            class="col-md-9 form-control"
            placeholder="输入邮箱"
            required
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="phone-number" class="col-md-3 col-form-label">电话</label>
        <div class="col-md-9">
          <input
            type="text"
            id="phone-number"
            v-model="userData.phoneNumber"
            class="col-md-9 form-control"
            placeholder="输入电话"
            required
          />
        </div>
      </div>

      <div class="row mb-3 d-flex justify-content-center align-items-center">
        <div class="col col-md-12">
          <input
            type="submit"
            class="btn btn-outline-primary"
            :value="isUpdateForm ? '更新' : '注册'"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    title: String,
    userData: Object,
    isUpdateForm: {
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
.container {
  width: 450px;
}

h2 {
  text-align: center;
}
</style>
