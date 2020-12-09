<template>
  <div class="container">
    <form @submit="$event.preventDefault()">
      <div class="row mb-3">
        <label for="username" class="col-md-3 col-form-label">工号</label>
        <div class="col-md-9">
          <input
            type="text"
            id="username"
            v-model="formData.username"
            class="col-md-9 form-control"
            placeholder="输入工号"
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
            v-model="formData.name"
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
              v-model="formData.gender"
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
              v-model="formData.gender"
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
            v-model="formData.password"
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
            v-model="formData.emailAddress"
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
            v-model="formData.phoneNumber"
            class="col-md-9 form-control"
            placeholder="输入电话"
            required
          />
        </div>
      </div>

      <div class="row mb-3 d-flex justify-content-center">
        <div class="col col-md-12">
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
  name: 'RegisterForm',
  props: {
    formData: Object,
  },
};
</script>

<style scoped>
.container {
  text-align: left;
  width: 450px;
}
</style>
