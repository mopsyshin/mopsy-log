<template>
  <div class="area-ic-menu" :class="{ active : isActive }" @click="toggleGnb">
    <div class="wrapper">
      <div class="bar top"></div>
      <div class="bar mid first"></div>
      <div class="bar mid second"></div>
      <div class="bar bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconMenu",
  props: {
    isActive: {
      default: false,
      isRequired: true,
    },
  },
  methods: {
    toggleGnb() {
      this.$emit('toggleGnb', !this.isActive);
    }
  }
}
</script>

<style lang="scss" scoped>
.area-ic-menu {
  display: none;
  width: 48px;
  height: 48px;
  position: relative;
  z-index: 200;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 48px;
  transition: all 0.3s;
  background-color: $nl80;
  &:hover {
    background-color: $nd06;
  }
  .wrapper {
    .bar {
      width: 18px;
      height: 3px;
      border-radius: 6px;
      background-color: #333333;
      transition: all 0.2s;
    }
    .top {
      margin-bottom: 3px;
    }
    .mid.first {
      position: absolute;
    }
    .bottom {
      margin-top: 3px;
    }
  }
  &.active {
    .wrapper {
      .top {
        transform: translateY(-10px);
        opacity: 0;
      }
      .bottom {
        transform: translateY(10px);
        opacity: 0;
      }
      .mid.first {
        transform: rotate(135deg);
      }
      .mid.second {
        transform: rotate(-135deg);
      }
    }
  }
}
@media (max-width: 768px ) {
  .area-ic-menu{
    display: flex;
  }
}
</style>
