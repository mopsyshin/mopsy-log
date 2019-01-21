<template>
  <div class="container-responsive">
    <page-title title="Career"/>
    <div class="card-list">
      <list-card-item v-for="career in careers"
                      :key="career.index"
                      :contents="career"
                      />
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle';
import ListCardItem from '~/components/card/ListCardItem';
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
    ListCardItem,
  },
};

</script>

<style lang="scss" scoped>

</style>

