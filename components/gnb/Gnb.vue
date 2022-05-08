<template>
  <div class="container-gnb">
    <div class="wrapper">
      <div class="items left-side">
        <div class="logo-wrapper" @click="$router.push('/')">
          <img src="~/assets/images/logo_m.svg">
        </div>
      </div>
      <div class="items right-side">
        <icon-menu :isActive="gnbState" @toggleGnb="toggleGnb"/>
        <div class="gnb-menu-desktop">
          <div class="menu-item"
               v-for="item in gnbMenuItems" 
               :key="item.key"
               :class="{ 'active' : currentRoute === item }"
               @click="toUrl(item)">
            {{ item }} _
          </div>
        </div>
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
      gnbMenuItems: [
        'Career',
        'Project',
        'Blog',
      ],
      currentRoute: '',
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.name;
    },
  },
  created() {
    this.$gnb.$on('toggleGnb', this.toggleGnb);
  },
  methods: {
    toUrl(path) {
      if (path === 'Blog') {
        window.open('https://mopsy-blog.firebaseapp.com/');
        return false;
      }
      this.$router.push(`/${path}`);
    },
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
.gnb-menu-desktop {
  @include flex(center, flex-start);
  margin-right: 24px;
  .menu-item {
    font-size: 15px;
    font-weight: 700;
    margin-left: 48px;
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      color: $mopsy-blue;
    }
  }
}
.container-gnb {
  width: 100%;
  height: 60px;
  position: fixed;
  @include flex(center, center);
  top: 8px;
  left: 0;
  z-index: 100;
  .wrapper {
    width: 100%;
    padding: 0px 16px;
    margin: 0 auto;
    @include flex(center, space-between);
    .items {
      @include flex(center, center);
      .logo-wrapper {
        position: relative;
        z-index: 100;
        width: 48px;
        height: 48px;
        @include flex(center, center);
        background-color: $nl80;
        border-radius: 48px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          background-color: $nd04;
        }
        img {
          width: 24px;
        }
      }
    }
  }
}
@media (max-width: 768px ) {
  .gnb-menu-desktop {
    display: none;
  }
} 
</style>
