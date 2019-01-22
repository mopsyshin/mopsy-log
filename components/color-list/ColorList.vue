<template>
  <div class="color-list" ref="list" :style="{height: listHeight + 'px'}">
    <color-item
          v-for="index in numberOfBlock"
          :key="index"
          :index="index"
          :bgColor="getDerivationColor()"
          :style="{'width': blockSize + 'px',
                  'height': blockSize + 'px'}"/>
  </div>
</template>

<script>
import ColorItem from '~/components/color-list/ColorItem';

export default {
  name: 'ColorComposer',
  data () {
    return {
      blockUnit: 10,
      blockSize: 0,
      listHeight: 700,
      listWidth: 0,
      numberOfBlock: 0,
      baseColor: {
        r: 0,
        g: 0,
        b: 0,
      },
    };
  },
  async mounted() {
    this.listHeight = this.$refs.list.getBoundingClientRect().width;
    this.listWidth = this.$refs.list.getBoundingClientRect().width;
    this.init();
  },
  methods: {
    init() {
      this.baseColor = {
        r: this.makeRandom(30, 220),
        g: this.makeRandom(30, 220),
        b: this.makeRandom(30, 220),
      };
      this.blockSize = this.listWidth / this.blockUnit;
      this.numberOfBlock = Math.ceil(this.listHeight / this.blockSize) * 10;
      this.$refs.list.style.backgroundColor = `rgb(${this.baseColor.r},${this.baseColor.g},${this.baseColor.b})`;
    },
    makeRandom(min, max){
      const RandVal = Math.random() * (max - min) + min;
      return Math.floor(RandVal);
    },
    getDerivationColor() {
      return {
        r: this.baseColor.r + this.makeRandom(-60, 60),
        g: this.baseColor.g + this.makeRandom(-60, 60),
        b: this.baseColor.b + this.makeRandom(-60, 60),
      };
    },
  },
  components: {
    ColorItem,
  },
};

</script>

<style lang='scss' scoped>
.color-list {
  width: 100%;
  height: 700px;
  overflow: hidden;
  border-radius: 16px;
}
</style>