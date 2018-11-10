<template>
  <div class="container-1440">
    <Gnb/>
    <nuxt/>
  </div>
</template>

<script>
import Gnb from '~/components/Gnb';

export default {
  name: "NavHeader",
  components: {
    Gnb,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/main.scss';
.container-1440 {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  @extend %flex-center;
}
@media (max-width: 910px ) {
  .container-1440 {
    align-items: flex-start;
  }
}
</style>
