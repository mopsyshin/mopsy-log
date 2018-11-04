<template>
  <div class="container-gnb">
    <div class="wrapper">
      <div class="items left-side">
      </div>
      <div class="items right-side">
        <icon-menu/>
      </div>
    </div>
  </div>
</template>

<script>
import IconMenu from '~/components/icons/IconMenu.vue';

export default {
  name: "Gnb",
  components: {
    IconMenu,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

.container-gnb {
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  .wrapper {
    width: 100%;
    max-width: 1440px;
    padding: 0px 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .items {
      @extend %flex-center;
    }
  }

}
</style>
