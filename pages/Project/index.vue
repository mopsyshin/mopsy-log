<template>
  <div class="container-responsive">
    <page-title title="Project"/>
    <div class="body">
      <p>
        Coming Soon
      </p>
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
.body {
  padding: 0 16px;
}
@media (max-width: 768px) {
  .project-list {
    margin: 0;
    margin-top: 8px;
    @include flex(center, space-between);
    padding: 0 28px;
  }
  .body {
    padding: 0 24px;
  }
}
</style>

