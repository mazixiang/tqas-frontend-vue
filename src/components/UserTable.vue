<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">ID</th>
          <th scope="col">姓名</th>
          <th scope="col">性别</th>
          <th scope="col">密码</th>
          <th scope="col">邮箱</th>
          <th scope="col">电话</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.emailAddress }}</td>
          <td>{{ user.phoneNumber }}</td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm btn-operation"
              @click="$emit('assess-teacher', user.id)"
              v-if="isTeacherTable"
            >
              <font-awesome-icon icon="calculator" />
            </button>

            &nbsp;

            <button
              class="btn btn-outline-info btn-sm btn-operation"
              @click="$emit('update-user', user.id)"
            >
              <font-awesome-icon icon="edit" />
            </button>

            &nbsp;

            <button
              class="btn btn-outline-danger btn-sm btn-operation"
              @click="$emit('delete-user', user.id)"
            >
              <font-awesome-icon icon="trash-alt" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="row d-flex justify-content-end">
      <div class="col-md-2">
        <button class="btn btn-outline-primary" @click="$emit('refresh-table')">
          <font-awesome-icon icon="sync-alt" />
          刷新列表
        </button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-outline-info" @click="$emit('add-user')">
          <font-awesome-icon icon="plus" />
          添加记录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    users: Array,
    title: String,
    isTeacherTable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  width: 60%;
}

.btn-operation {
  width: 20%;
}
</style>
