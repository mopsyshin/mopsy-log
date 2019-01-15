<template>
  <div class="container-page-title">
    {{ title }}
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: {
      isRequired: true,
    },
  },
};

</script>

<style lang='scss' scoped>
.container-page-title {
  padding: 16px 28px;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.6px;
  color: $b300;
  .bar {
    display: inline-block;
    width: 60px;
    height: 48px;
    border-bottom: 4px solid $b300;
  }
}
</style>