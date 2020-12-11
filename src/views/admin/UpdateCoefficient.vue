<template>
  <div class="container">
    <div v-if="enterFromOtherEntrance">
      <EnterFromOtherEntranceError />
    </div>
    <div v-else>
      <CoefficientForm
        :coefficient="coefficient"
        @update-coefficient="doUpdate"
      />
    </div>
  </div>
</template>

<script>
import CoefficientForm from '@/components/CoefficientForm';
import EnterFromOtherEntranceError from '@/components/error/EnterFromOtherEntranceError';
import { updateCoefficient } from '@/api/coefficient';

export default {
  name: 'UpdateCoefficient',
  metaInfo: {
    title: '修改系数',
  },
  components: { EnterFromOtherEntranceError, CoefficientForm },
  created() {
    this.enterFromOtherEntrance = this.$route.params.coefficient === undefined;
    if (!this.enterFromOtherEntrance) {
      this.coefficient = this.$route.params.coefficient;
    }
  },
  data() {
    return { coefficient: {}, enterFromOtherEntrance: true };
  },
  methods: {
    async doUpdate() {
      await updateCoefficient(
        this.coefficient,
        this.$store.state.currentUserId
      ).then((response) => {
        switch (response.status) {
          case 'success':
            this.$router.back();
        }
      });
    },
  },
};
</script>

<style scoped></style>
