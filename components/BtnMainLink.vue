<template>
  <div class="container-main-link" :class="{touch: isTouch}" ref="target">
    <div class="title">
      Message
    </div>
    <div>
      <img src="~assets/images/ic_arrow.svg" alt="">
    </div>
  </div>
</template>

<script>
import TouchAction from '~/components/mixin/TouchAction.js';

export default {
  name: "BtnMainLink",
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
  height: 60px;
  border-radius: 60px;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 27px;
  &.touch {
    background-color: rgba(0,0,0,0.04);
    transform: scale(1.05) translateY(-4px);
    box-shadow: 0px 4px 16px rgba(0,0,0,0.04);
  }
  .title {
    font-size: 36px;
    font-weight: 700;
  }
}

</style>
