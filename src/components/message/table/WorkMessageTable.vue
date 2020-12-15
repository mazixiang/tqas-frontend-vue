<template>
  <div class="container">
    <h2>著作信息列表</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">拥有者ID</th>
          <th scope="col">日期</th>
          <th scope="col">排名</th>
          <th scope="col" v-if="!isAdmin">操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(message, index) in workMessages" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ message.ownerId }}</td>
          <td>{{ convertToDateString(message.date) }}</td>
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

    <div class="row d-flex justify-content-end">
      <div class="col-md-2" v-if="!isAdmin">
        <button class="btn btn-outline-info" @click="$emit('add-message')">
          <font-awesome-icon icon="plus" />
          添加著作信息
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
import moment from 'moment';
export default {
  name: 'WorkMessageTable',
  props: {
    workMessages: Array,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    convertToDateString(date) {
      moment.locale('zh-cn');
      console.log(moment.months());
      console.log(date.replace(',', ''));
      let m = moment(date.replace(',', ''), 'MMM D YYYY');

      return m.format('YYYY/MM/DD');
    },
  },
};
</script>

<style scoped></style>
