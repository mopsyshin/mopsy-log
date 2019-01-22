<template>
  <div class="container-detail">
    <div class="title">
      Color Composer
      <div class="sub-title">
      Random color composer
      </div>
    </div>
    <div class="bar"></div>
    <color-list v-if="isActive"/>
    <button @click="reRender" class="btn-randomize">Randomize</button>
  </div>
</template>

<script>
import ColorList from '~/components/color-list/ColorList';

export default {
  name: 'ColorComposer',
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    reRender() {
      this.isActive = false;
      setTimeout(() => {
        this.isActive = true;
      }, 1); 
    },
  },
  components: {
    ColorList,
  },
};

</script>

<style lang='scss' scoped>
.btn-randomize {
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 24px auto;
  padding: 8px 24px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: $nd40;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: $nd04;
  }
}
</style>