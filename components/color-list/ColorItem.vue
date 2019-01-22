<template>
  <div class="color-item" :class="{'active': isActive}" :style="{'background-color': bg}">
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    index: {
    },
    bgColor: {
      type: Object,
    },
  },
  data () {
    return {
      isActive: false,
      bg: `rgb(${this.bgColor.r},${this.bgColor.g},${this.bgColor.b})`,
    };
  },
  methods: {
    makeRandom(min, max){
      const RandVal = Math.random() * (max - min) + min;
      return Math.floor(RandVal);
    },
  },
  mounted() {
    setTimeout(() => {
      this.isActive = true;
      setInterval(() => {
        this.bg = `rgb(${this.bgColor.r + this.makeRandom(-60, 60)},${this.bgColor.g + this.makeRandom(-60, 60)},${this.bgColor.b + this.makeRandom(-60, 60)})`;
      }, this.makeRandom(200,500));
    }, this.index * 5);
  },
};

</script>

<style lang='scss' scoped>
.color-item {
  opacity: 0;
  transform: translateY(-20%);
  float: left;
  transition: all 1s;
  &.active {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>