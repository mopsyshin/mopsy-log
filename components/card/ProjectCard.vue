<template>
  <div class="container-project-card" @click="toggleModal">
    <div class="image-area">
      <img :src="contents.imgUrl" alt="">
    </div>
    <div class="title">
      {{ contents.title }}
      <span class="position">/ {{ contents.position }} </span>
    </div>
    <div class="period">
      {{ contents.period }}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    contents: {
      type: Object,
    }
  },
  data () {
    return {

    };
  },
  methods: {
    toggleModal() {
      const payload = {
        modalState: true,
        contents: this.contents,
      }
      this.$detailmodal.$emit('toggleModal', payload);
    },
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
.container-project-card {
  width: 33%;
  max-width: 360px;
  margin: 0 36px 32px;
  cursor: pointer;
  .image-area {
    position: relative;
    width: 100%;
    height: 230px;
    overflow: hidden;
    border: 1px solid $nd08;
    border-radius: 16px;
    img {
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5s;
      &:hover {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }
  .title {
    margin-top: 8px;
    font-size: 18px;
    color: #5f757e;
    .position {
      font-size: 14px;
      color: #98a7b0;
    }
  }
  .desc {
    font-size: 14px;
    color: #98a7b0;
  }
  .period {
    font-size: 12px;
    color: #aab7be;
  }
}
@media (max-width: 1280px) {
  .container-project-card {
    width: 48%;
    margin: 0 0px 32px;
    .image-area {
      height: 180px;
      img {
        height: auto;
        width: 100%;
      }
    }
    .title {
      margin-top: 4px;
    }
  }
}
@media (max-width: 600px) {
  .container-project-card {
    width: 100%;
    max-width: 600px;
    .image-area {
      height: 180px;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
}
</style>