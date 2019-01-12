<template>
  <div class="gnb-menu-container">
    <div class="wrapper-main-links">
      <btn-main-link :name="'Home'"/>
      <btn-main-link :name="'Project'"/>
      <btn-main-link :name="'Career'"/>
      <btn-main-link :name="'Blog'"/>
    </div>
  </div>
</template>

<script>
import BtnMainLink from '~/components/BtnMainLink';

export default {
  name: '',
  props: {

  },
  data () {
    return {

    };
  },
  methods: {
  
  },
  components: {
    BtnMainLink,
  },
};

</script>

<style lang='scss' scoped>
.gnb-menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255,255,255,0.9);
  .wrapper-main-links {
    padding: 52px 24px 32px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    @include flex(flex-start, center);
    flex-direction: column;
  }
}
</style>