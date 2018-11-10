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
      <btn-main-link :message="'Project'"/>
      <btn-main-link :message="'Career'"/>
      <btn-main-link :message="'Blog'"/>
    </div>
  </section>
</template>

<script>
import IconMoreInfo from '~/components/icons/IconMoreInfo';
import BtnMainLink from '~/components/BtnMainLink';

export default {
  components: {
    IconMoreInfo,
    BtnMainLink,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @extend %flex-center;
  .profile-summery {
    width: 100%;
    max-width: 720px;
    padding: 0 24px;
    margin-top: 24px;
    @extend %flex-center;
    align-items: flex-start;
    .wrapper-logo {
      width: 50%;
      height: 50vw;
      min-height: 180px;
      max-height: 300px;
      border: 1px solid #f6f6f6;
      @extend %flex-center;
    }
    .wrapper-profile-box {
      position: relative;
      width: 50%;
      height: 50vw;
      min-height: 180px;
      max-height: 300px;
      padding: 8px 16px;
      background-color: $mopsy-blue;
      color: $nl100;
      margin-top: 150px;
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
    padding: 32px 24px;
    width: 100%;
    @extend %flex-center;
    flex-direction: column;
  }
}
@media (max-width: 910px ) {
  .container {
    flex-direction: column;
  }
}
</style>

