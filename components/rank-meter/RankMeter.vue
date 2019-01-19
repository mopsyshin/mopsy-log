<template>
  <div class="container-skill-item">
        <div class="name">
          {{ tool.name }}
        </div>
        <div class="info">
          <div class="img">
            <img :src="tool.imgUrl" alt="">
          </div>
          <div class="rank">
            <div class="rank-meter"
                 v-for="index in 10"
                 :key="index"
                 :class="{'active' : index <= tool.rank }"
                 :style="{ backgroundColor : index <= tool.rank ? tool.color : 'none'}">
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'RankMeter',
  props: {
    tool: {
      type: Object,
    },
  },
};

</script>

<style lang='scss' scoped>
.container-skill-item {
  margin: 16px 0px;
  .name {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .info {
    @include flex(center, flex-start);
    .img {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        margin: 0;
      }
    }
    .rank {
      @include flex(center, center);
      margin-left: 16px;
      .rank-meter {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        border: 1px solid $nd16;
        border-radius: 12px;
        transition: all 0.3s;
        box-shadow: 1px 2px 16px $nd04;
        &.active {
          border: none;
          border: 1px solid $nl100;
          &:hover {
          transform: scale(1.3);
          box-shadow: 1px 2px 16px $nd16;
        }
        }
      }
    }
  }
}
</style>