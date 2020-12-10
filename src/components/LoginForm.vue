<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <h2>{{ title }}</h2>
    </div>
    <form @submit="$event.preventDefault()">
      <div class="row mb-3">
        <label for="username" class="col-md-4 col-form-label"><font-awesome-icon icon="user" /> 用户名</label>
        <div class="col-md-8">
          <input
            type="text"
            id="username"
            v-model="formData.username"
            class="form-control"
            placeholder="输入用户名"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="password" class="col-md-4 col-form-label"><font-awesome-icon icon="lock" /> 密码</label>
        <div class="col-md-8">
          <input
            type="password"
            id="password"
            v-model="formData.password"
            class="col-md-9 form-control"
            placeholder="输入密码"
          />
        </div>
      </div>

      <div
        v-if="showRegisterBtn"
        class="row mb-3 d-flex justify-content-center align-items-center"
      >
        <div class="col col-md-6">
          <button class="btn btn-outline-primary" @click="$emit('login')">
            登录
          </button>
        </div>

        <div class="col col-md-6">
          <button class="btn btn-outline-info" @click="$emit('register')">
            注册
          </button>
        </div>
      </div>

      <div
        v-else
        class="row mb-3 btn-line d-flex justify-content-center align-items-center"
      >
        <div class="col col-md-12">
          <button class="btn btn-outline-primary" @click="$emit('login')">
            登录
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    formData: Object,
    showRegisterBtn: {
      type: Boolean,
      default: true
    },
    title: String
  },
};
</script>

<style scoped>
.container {
  width: 300px;
}

.btn {
  width: 60%;
}
</style>
