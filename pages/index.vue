<template>
  <section class="container">
    <div class="profile-summery">
      <div class="wrapper-logo" ref="logoWrapper">
        <img src="~assets/images/logo_m.svg">
      </div>
      <div class="wrapper-profile-box">
        <div class="title">
          Mopsy
        </div>
        <div class="desc">
          UI / UX Designer<br/>
          Front-end Developer<br/>
          Service Builder
        </div>
        <div class="ic-more-profile">
          <icon-more-info/>
        </div>
      </div>
    </div>
    <div class="wrapper-main-links">
      <btn-main-link/>
    </div>
  </section>
</template>

<script>
import IconMoreInfo from '~/components/icons/IconMoreInfo';
import BtnMainLink from '~/components/BtnMainLink';

export default {
  mounted() {
    const width = this.$refs.logoWrapper.getClientRects()[0].width;
    console.log(width);
    this.$refs.logoWrapper.style.height = `${width}px`;
  },
  components: {
    IconMoreInfo,
    BtnMainLink,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

.container {
  .profile-summery {
    width: 100%;
    padding: 0 24px;
    margin-top: 24px;
    display: flex;
    .wrapper-logo {
      width: calc(100vw - 48px - 177px);
      border: 1px solid #f6f6f6;
      @extend %flex-center
    }
    .wrapper-profile-box {
      position: relative;
      width: 177px;
      height: 177px;
      padding: 8px 16px;
      background-color: $mopsy-blue;
      color: $nl100;
      transform: translateY(50%);
      .title {
        font-size: 24px;
        font-weight: 700;
      }
      .desc {
        margin-top: 6px;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
  .wrapper-main-links {
    margin-top: 150px;
  }
}
</style>

