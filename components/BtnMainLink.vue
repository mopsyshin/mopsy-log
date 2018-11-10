<template>
  <div class="container-main-link" :class="{touch: isTouch}" ref="target">
    <div class="title">
      {{ message }}
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
    message: {
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
  background-color: rgba(0,0,0,0.04);
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
  }
  .bar {
    display: inline-block;
    width: 60px;
    height: 48px;
    border-bottom: 4px solid #000000;
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
  @media (max-width: 910px ) {
    .container-main-link {
      max-width: 100%;
    }
  }

</style>
