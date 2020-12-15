<template>
  <div class="container">
    <div v-if="!enterFromOtherEntrance">
      <h4>教师 {{ teacherId }}</h4>
      <FinalScoreCard :score="score" />
    </div>
    <div v-else>
      <EnterFromOtherEntranceError />
    </div>
  </div>
</template>

<script>
import FinalScoreCard from '@/components/FinalScoreCard';
import assessTeacher from '@/lib/assessTeacher';
import EnterFromOtherEntranceError from '@/components/error/EnterFromOtherEntranceError';

export default {
  name: 'AssessTeacher',
  components: { EnterFromOtherEntranceError, FinalScoreCard },
  metaInfo: { title: '教师考核' },
  data() {
    return {
      teacherId: null,
      enterFromOtherEntrance: true,
      score: 0,
    };
  },
  methods: {
    async getScore() {
      let teacherId = this.$route.params.id;
      let score = 0;

      await assessTeacher(teacherId).then((result) => {
        score = result;
      });

      this.score = score;
    },
  },
  async created() {
    if (this.$route.params.id !== null) {
      this.enterFromOtherEntrance = false;
      this.teacherId = this.$route.params.id;
      await this.getScore();
    }
  },
};
</script>

<style scoped></style>
