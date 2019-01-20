<template>
  <div>
    <Gnb/>
    <div class="frame"></div>
    <div class="fixed-container">
      <div class="layout-container">
        <div class="main-container">
          <nuxt/>
        </div>
      </div>
      <transition name="fade" mode="out-in" appear>
        <detail-modal/>
      </transition>
    </div>
  </div>
</template>

<script>
import Gnb from '~/components/gnb/Gnb';
import DetailModal from '~/components/detail-modal/DetailModal';

export default {
  name: "NavHeader",
  components: {
    Gnb,
    DetailModal,
  }
}
</script>

<style lang="scss">
@import '../assets/css/main.scss';
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter {
  opacity: 0;
  transition: all 0.3s;
}
.frame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  border: 12px solid $nl80;
}
.fixed-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.layout-container {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
}
.main-container {
  padding-top: 60px;
}

@media (max-width: 1280px) {
  .layout-container {
    max-width: 768px;
  }
}
</style>
