<template>
  <div class="container-project">
    <page-title title="Project"/>
    <div class="project-list">
      <project-card  v-for="project in projects"
                     :key="project.index"
                     :contents="project"
                     />
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle';
import ProjectCard from '~/components/card/ProjectCard';
import PojectData from '~/data/project.js';

export default {
  name: 'project',
  data () {
    return {
      projects: PojectData,
    };
  },
  components: {
    PageTitle,
    ProjectCard,
  },
};

</script>

<style lang="scss" scoped>
.project-list {
  margin: 0 -36px;
  margin-top: 16px;
  @include flex(center, center);
  flex-wrap: wrap;
}
@media (max-width: 1280px) {
  .project-list {
    margin: 0;
    margin-top: 8px;
    @include flex(center, space-between);
    padding: 0 28px;
  }
}
</style>

