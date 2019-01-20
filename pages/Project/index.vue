<template>
  <div class="container-project">
    <div class="project-list">
    
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle';

export default {
  name: 'project',
  data () {
    return {

    };
  },
  components: {
    PageTitle,
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

