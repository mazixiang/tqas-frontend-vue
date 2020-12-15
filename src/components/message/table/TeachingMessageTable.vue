<template>
  <div class="container">
    <h2>教学信息列表</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">拥有者ID</th>
          <th scope="col">课程名称</th>
          <th scope="col">课程学时</th>
          <th scope="col">班级名称</th>
          <th scope="col">班级人数</th>
          <th scope="col" v-if="!isAdmin">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(message, index) in teachingMessages" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ message.ownerId }}</td>
          <td>{{ message.courseName }}</td>
          <td>{{ message.coursePeriod }}</td>
          <td>{{ message.className }}</td>
          <td>{{ message.classSize }}</td>
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

    <div class="row d-flex justify-content-end">
      <div class="col-md-2" v-if="!isAdmin">
        <button class="btn btn-outline-info" @click="$emit('add-message')">
          <font-awesome-icon icon="plus" />
          添加教学信息
        </button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-outline-info" @click="$emit('refresh-table')">
          <font-awesome-icon icon="sync-alt" />
          刷新列表
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeachingMessageTable',
  props: {
    teachingMessages: Array,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
