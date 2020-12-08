<template>
  <div class="container">
    <form @submit="$event.preventDefault()">
      <div class="row mb-3">
        <label for="username" class="col-md-3 col-form-label">用户名</label>
        <div class="col-md-9">
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
        <label for="password" class="col-md-3 col-form-label">密码</label>
        <div class="col-md-9">
          <input
            type="password"
            id="password"
            v-model="formData.password"
            class="col-md-9 form-control"
            placeholder="输入密码"
          />
        </div>
      </div>

      <div class="row mb-3 btn-line justify-content-center align-items-center">
        <div class="col col-md-6">
          <button class="btn btn-outline-primary" @click="$emit('login')">
            登录
          </button>
        </div>

        <div class="col col-md-6">
          <button class="btn btn-outline-primary" @click="$emit('register')">
            注册
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
  },
};
</script>

<style scoped>
.container {
  text-align: left;
  width: 300px;
}

.btn-line {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
