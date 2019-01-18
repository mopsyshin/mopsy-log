<template>
  <div class="container-career">
    <page-title title="Career"/>
    <div class="career-list">
      <career-card  v-for="career in careers"
                     :key="career.index"
                     :contents="career"
                     />
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle';
import CareerCard from '~/components/card/CareerCard';
import CareerData from '~/data/career.js';

export default {
  name: 'career',
  data () {
    return {
      careers: CareerData,
    };
  },
  components: {
    PageTitle,
    CareerCard,
  },
};

</script>

<style lang="scss" scoped>
.career-list {
  margin: 0 -36px;
  margin-top: 16px;
  @include flex(center, center);
  flex-wrap: wrap;
}
@media (max-width: 1280px) {
  .career-list {
    margin: 0;
    margin-top: 8px;
    @include flex(center, space-between);
    padding: 0 28px;
  }
}
</style>

