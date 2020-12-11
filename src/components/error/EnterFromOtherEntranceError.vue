<template>
<div class="container alert alert-danger" id="error-container">
  <h1>错误</h1>
  <hr />
  <p>你似乎从其他入口进入，请从正确的地方进入此页面</p>
</div>
</template>

<script>
export default {
name: "EnterFromOtherEntranceError"
}
</script>

<style scoped>
#error-container {
  width: 500px;
}
</style>