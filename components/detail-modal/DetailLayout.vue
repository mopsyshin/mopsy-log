<template>
  <div>
    
  </div>
</template>

<script>
import Markdown from 'markdown-it';

export default {
  props: {
    md: {
      isRequired: true,
    },
  },
  data () {
    return {
      contents: '',
    };
  },
  created() {
    const md = new Markdown();
    this.contents = md.render(this.md);
  },
  methods: {
  
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>

</style>