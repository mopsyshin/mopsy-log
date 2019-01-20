<template>
  <div class="container-responsive">
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
  width: 100%;
  padding: 0 4px;
  @include flex(center, flex-start);
  flex-wrap: wrap;
  margin: 32px auto;
}
@media (max-width: 1280px) {
  .career-list {
    @include flex(center, space-between);
    padding: 0 20px;
  }
}
</style>

