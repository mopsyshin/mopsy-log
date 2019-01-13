<template>
  <div class="container-detail-modal" v-if="modalState" :class="{'leave-active': leaveState}">
    <div class="box-detail-modal">
      <detail-layout :md="contents.md"/>
    </div>
    <div class="bg" @click="toggleModal({ modalState: false })"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import DetailLayout from './DetailLayout';

const DetailModal = new Vue();
Object.defineProperties(Vue.prototype, {
  $detailmodal: {
    get: () => DetailModal,
    configurable: true,
  },
});

export default {
  data () {
    return {
      modalState: false,
      contents: '',
      leaveState: false,
    };
  },
  mounted() {
    this.$detailmodal.$on('toggleModal', this.toggleModal);
  },
  methods: {
    toggleModal(payload) {
      if (payload.modalState === false) {
        this.leaveState = true;
        document.querySelector('.fixed-container').style.overflow = "auto";
        setTimeout(() => {
          this.modalState = payload.modalState;
          this.contents = payload.contents;
          this.leaveState = false;
        }, 300)
      } else {
        document.querySelector('.fixed-container').style.overflow = "hidden";
        this.modalState = payload.modalState;
        this.contents = payload.contents;
      }
      
    },
    toUrl(url) {
      if (url) {
        window.open(url, "");
      } else {

      }
    },
  },
  components: {
    DetailLayout,
  },
};

</script>

<style lang='scss' scoped>
.container-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  @include flex(center, center);
  z-index: 300;
  transition: all 0.3s;
  &.leave-active {
    opacity: 0;
  }
  .box-detail-modal {
    width: 100%;
    margin: 0 24px;
    padding: 24px;
    max-width: 768px;
    background-color: $nl100;
    box-shadow: 0px 4px 24px $blue-shadow;
    z-index: 310;
  }
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $nl90;
    z-index: 305;
  }
}
</style>