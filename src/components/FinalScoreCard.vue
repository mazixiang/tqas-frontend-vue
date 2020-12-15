<template>
  <div class="container" id="card-container">
    <div class="row">
      <div class="card" id="score-card">
        <h5 class="card-title">最终得分</h5>
        <p class="card-text" style="font-size: 2em">{{ score.toFixed(3) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinalScoreCard',
  props: {
    score: Number,
  },
};
</script>

<style scoped>
#card-container {
  width: 300px;
}

#score-card {
  padding: 10px;
}
</style>
