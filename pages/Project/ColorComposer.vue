<template>
  <div class="container-detail">
    <div class="title">
      Color Composer
    </div>
    <div class="color-list" ref="list">
      <div class="color-item"
           v-for="color in numberOfBlock"
           :key="color.index"
           :style="{'width': blockSize + 'px', 
                    'height': blockSize + 'px',
                    'background-color': getRandomColor()}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorComposer',
  props: {

  },
  data () {
    return {
      blockUnit: 10,
      blockSize: 0,
      listHeight: 0,
      listWidth: 0,
      numberOfBlock: 0,
    };
  },
  async mounted() {
    this.listHeight = await this.$refs.list.getBoundingClientRect().height;
    this.listWidth = await this.$refs.list.getBoundingClientRect().width;
    if (this.listHeight > this.listWidth) {
      this.blockSize = this.listHeight / this.blockUnit;
      this.numberOfBlock = Math.ceil(this.listWdith / this.blockSize) * 10;
    } else {
      this.blockSize = this.listWidth / this.blockUnit;
      this.numberOfBlock = Math.ceil(this.listHeight / this.blockSize) * 10;
    }
  },
  methods: {
    makeRandom(min, max){
      const RandVal = Math.random() * (max - min) + min;
      return Math.floor(RandVal);
    },
    getRandomColor() {
      const rVal = this.makeRandom(0, 255);
      const gVal = this.makeRandom(0, 255);
      const bVal = this.makeRandom(0, 255);
      return `rgba(${rVal},${gVal},${bVal})`;
    },
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
.color-list {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 16px;
  .color-item {
    float: left;
    background-color: #00ff00;
  }
}
</style>