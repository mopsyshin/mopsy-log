<template>
  <div>
    <div v-html="contents">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    md: {
      isRequired: true,
    },
  },
  data () {
    return {
      contents: this.md,
    };
  },
  methods: {
  
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
</style>