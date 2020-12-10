<template>
  <div class="container">
    <div class="row">
      <h2>{{ title }}</h2>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(field, index) in fields" :key="index">{{ field }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(field, index) in fields" :key="index">
            {{ row[field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RecordTable',
  props: {
    title: String,
    fields: Array,
    data: Array,
  },
};
</script>

<style scoped></style>
