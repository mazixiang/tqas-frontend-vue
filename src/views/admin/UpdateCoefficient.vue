<template>
  <div class="container">
    <CoefficientForm
      :coefficient="coefficient"
      @update-coefficient="doUpdate"
    />
  </div>
</template>

<script>
import CoefficientForm from '@/components/CoefficientForm';
import { getCoefficient, updateCoefficient } from '@/api/coefficient';

export default {
  name: 'UpdateCoefficient',
  metaInfo: {
    title: '修改系数',
  },
  components: { CoefficientForm },
  async created() {
    await getCoefficient().then((response) => {
      this.coefficient = response.data;
    });
  },
  data() {
    return { coefficient: {} };
  },
  methods: {
    async doUpdate() {
      await updateCoefficient(
        this.coefficient,
        this.$store.state.currentUserId
      ).then((response) => {
        switch (response.status) {
          case 'success':
            this.$router.push('/admin');
        }
      });
    },
  },
};
</script>

<style scoped></style>
