<template>
  <div class="area-ic-more-info" :class="{active: isActive, 'touch': isTouch}" @click="activate" ref="target">
    <div class="bar first"></div>
    <div class="bar second"></div>
  </div>
</template>

<script>
import TouchAction from '~/components/mixin/TouchAction.js';

export default {
  name: "IconMoreInfo",
  data() {
    return {
      isActive: false,
      isTouch: false,
    }
  },
  methods: {
    activate() {
      this.isActive = !this.isActive;
    },
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
@import '../../assets/css/main.scss';

.area-ic-more-info {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  @extend %flex-center;
  background-color: #F1FF7A;
  position: absolute;
  bottom: 12px;
  right: 12px;
  cursor: pointer;
  transition: all 0.3s;
  .bar {
    width: 18px;
    height: 3px;
    background-color: #333333;
    border-radius: 3px;
    position:absolute;
    transition: all 0.3s;
    &.second {
      transform: rotate(270deg);
    }
  }
  &.active {
    .bar {
      &.first {
        transform: rotate(180deg);
      }
      &.second {
        transform: rotate(0deg);
      }
    }
  }
  &.touch {
    transform: translateY(-4px) scale(1.3);
  }
}

</style>
