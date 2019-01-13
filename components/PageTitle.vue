<template>
  <div class="container-page-title">
    {{ title }}
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
  methods: {
  
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
.container-page-title {
  padding: 16px 28px;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.6px;
}
</style>