<template>
  <div class="container">
    <CoefficientBoard
      :coefficients="this.coefficient"
      :is-admin="true"
      @edit-coefficient="editCoefficient"
      @manage-teacher="manageTeacher"
    />
  </div>
</template>

<script>
import CoefficientBoard from '@/components/CoefficientBoard';
import { getCoefficient } from '@/api/coefficient';

export default {
  name: 'AdminHome',
  metaInfo: {
    title: '管理员主页'
  },
  components: { CoefficientBoard },
  async created() {
    await getCoefficient().then((response) => {
      this.coefficient = response.data;
    });
  },
  data() {
    return {
      coefficient: {},
    };
  },
  methods: {
    async editCoefficient() {
      await this.$router.push('/admin/updateCoefficient');
    },
    async manageTeacher() {
      await this.$router.push('/admin/manageTeacher');
    },
  },
};
</script>

<style scoped></style>
