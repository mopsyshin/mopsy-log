<template>
  <div class="container-main-link" :class="{touch: isTouch}" ref="target" @click="toUrl(name)">
    <div class="title">
      {{ name }}
      <div class="bar"></div>
    </div>
    <div class="wrapper-arrow">
      <img src="~assets/images/ic_arrow.svg" alt="">
    </div>
  </div>
</template>

<script>
import TouchAction from '~/components/mixin/TouchAction.js';

export default {
  name: "BtnMainLink",
  props: {
    name: {
      default: '',
    },
  },
  data() {
    return {
      isTouch: false,
    };
  },
  mounted() {
    this.touchAction(this.$refs.target);
  },
  methods: {
    toUrl(target) {
      if (target === 'Blog') {
        window.open('https://mopsy-blog.firebaseapp.com/');
        return false;
      } else {
        this.$router.push('/' + target);
      }
      this.$gnb.$emit('toggleGnb', false);
    },
  },
  mixins: [
    TouchAction,
  ],
}
</script>

<style lang="scss" scoped>
.container-main-link {
  width: 100%;
  max-width: 440px;
  height: 68px;
  border-radius: 60px;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px 8px 32px;
  background-color: $nd04;
  margin: 12px 0px;
  cursor: pointer;
  &.touch {
    transform: scale(1.05) translateY(-4px);
  }
  &:hover {
    transform: scale(1.05) translateY(-4px);
  }
  .title {
    font-size: 36px;
    font-weight: 700;
    transform: translateY(-4px);
    color: $b300;
  }
  .bar {
    display: inline-block;
    width: 60px;
    height: 48px;
    border-bottom: 4px solid $b300;
  }
  .wrapper-arrow {
    width: 40px;
    height: 40px;
    border: 1px solid #1822F2;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
  @media (max-width: 1280px ) {
    .container-main-link {
      max-width: 100%;
    }
  }

</style>
