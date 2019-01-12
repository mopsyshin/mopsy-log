<template>
  <div class="container-1440">
    <Gnb/>
    <div class="main-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Gnb from '~/components/gnb/Gnb';

export default {
  name: "NavHeader",
  components: {
    Gnb,
  }
}
</script>

<style lang="scss">
@import '../assets/css/main.scss';

.container-1440 {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
}
.main-container {
  padding-top: 48px;
}
</style>
