<template>
  <div class="container-list-card" @click="toDetail">
    <div class="image-area">
      <img :src="imgUrl" alt="">
    </div>
    <div class="title">
      {{ contents.title }}
      <span class="sub-title">/ {{ contents.subTitle }} </span>
    </div>
    <div class="desc">
      {{ contents.desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    contents: {
      type: Object,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      imgUrl: '',
    }
  },
  mounted() {
    this.imgUrl = this.contents.imgUrl;
  },
  methods: {
    toDetail() {
      this.$router.push(`/${this.type}/${this.contents.route}`);
    },
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
.container-list-card {
  width: 100%;
  max-width: 360px;
  margin: 0 8px 32px;
  cursor: pointer;
  .image-area {
    position: relative;
    width: 100%;
    height: 230px;
    overflow: hidden;
    border: 1px solid $nd08;
    border-radius: 16px;
    background-color: $nl100;
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
    color: $b300;
    .sub-title {
      font-size: 14px;
      color: $b100;
    }
  }
  .desc {
    font-size: 14px;
    color: $b100;
  }
  .desc {
    font-size: 12px;
    color: $b50;
  }
}
@media (max-width: 1280px) {
  .container-list-card {
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
  .container-list-card {
    width: 100%;
    max-width: 600px;
    .image-area {
      height: 180px;
    }
  }
}
</style>