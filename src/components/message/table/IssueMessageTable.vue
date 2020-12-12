<template>
  <div class="container">
    <h2>论文信息列表</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">拥有者ID</th>
          <th scope="col">课题阶段</th>
          <th scope="col">课题排名</th>
          <th scope="col" v-if="!isAdmin">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(message, index) in issueMessages" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ message.ownerId }}</td>
          <td>{{ message.phase }}</td>
          <td>{{ message.rank }}</td>
          <td v-if="!isAdmin">
            <button
              class="btn btn-outline-danger btn-sm btn-operation"
              @click="$emit('delete-message', message.id)"
            >
              <font-awesome-icon icon="trash-alt" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="row d-flex justify-content-end" v-if="!isAdmin">
      <div class="col-md-2">
        <button class="btn btn-outline-info" @click="$emit('add-message')">
          <font-awesome-icon icon="plus" />
          添加课题信息
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueMessageTable',
  props: {
    issueMessages: Array,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
