<template>
  <div class="container-responsive">
    <page-title title="Project"/>
    <div class="card-list">
      <list-card-item v-for="project in ProjectData"
                      :key="project.index"
                      :contents="project"
                      />
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle';
import ListCardItem from '~/components/card/ListCardItem';
import ProjectData from '~/data/project.js';

export default {
  name: 'Project',
  data () {
    return {
      ProjectData,
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

