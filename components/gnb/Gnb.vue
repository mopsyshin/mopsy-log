<template>
  <div class="container-gnb">
    <div class="wrapper">
      <div class="items left-side">
        <icon-menu :isActive="gnbState" @toggleGnb="toggleGnb"/>
      </div>
      <div class="items right-side">
      </div>
    </div>
    <transition name="gnb-menu">
      <gnb-menu v-if="gnbState"/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import GnbMenu from './GnbMenu';
import IconMenu from '~/components/icons/IconMenu.vue';

const Gnb = new Vue();
Object.defineProperties(Vue.prototype, {
  $gnb: {
    get: () => Gnb,
    configurable: true,
  },
});

export default {
  name: "Gnb",
  data() {
    return {
      gnbState: false,
    }
  },
  created() {
    this.$gnb.$on('toggleGnb', this.toggleGnb);
  },
  methods: {
    toggleGnb(state) {
      this.gnbState = state;
    },
  },
  components: {
    IconMenu,
    GnbMenu,
  },
}
</script>

<style lang="scss" scoped>
.gnb-menu-enter {
  opacity: 0;
  transform: translateY(-10%);
}
.gnb-menu-enter-active {
  transition: all 0.5s;
}
.gnb-menu-leave-active {
  transition: all 0.5s;
  opacity: 0;
  transform: translateY(-10%);
}
.container-gnb {
  width: 100%;
  height: 60px;
  position: fixed;
  @include flex(center, center);
  top: 0;
  left: 0;
  z-index: 100;
  .wrapper {
    width: 100%;
    max-width: 1280px;
    padding: 0px 16px;
    margin: 0 auto;
    @include flex(center, space-between);
    .items {
      @include flex(center, center);
    }
  }

}
</style>
