<template>
  <section class="home-container">
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
      <btn-main-link :name="'About'"/>
      <btn-main-link :name="'Career'"/>
      <btn-main-link :name="'Project'"/>
      <btn-main-link :name="'Blog'"/>
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
.home-container {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 48px);
  top: -100px;
  max-width: 1440px;
  margin: 0 auto;
  @include flex(center, center);
  .profile-summery {
    width: 100%;
    max-width: 720px;
    padding: 0 24px;
    margin-top: 24px;
    @include flex(center, center);
    align-items: flex-start;
    .wrapper-logo {
      width: calc(50% - 8px);
      height: 50vw;
      min-height: 180px;
      max-height: 300px;
      border-radius: 8px;
      border: 1px solid #f0f0f0;
      @include flex(center, center);
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
    .wrapper-profile-box {
      position: relative;
      width: calc(50% - 8px);
      height: 50vw;
      min-height: 180px;
      max-height: 300px;
      margin-left: 16px;
      margin-top: 150px;
      padding: 8px 16px;
      border-radius: 8px;
      background-color: $mopsy-blue;
      color: $nl100;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
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
    @include flex(center, center);
    flex-direction: column;
  }
}
@media (max-width: 1280px ) {
  .home-container {
    top: 0;
    flex-direction: column;
    @include flex(center, flex-start);
    .profile-summery {
      margin-top: 16px;
      flex-direction: column;
      .wrapper-logo {
        display: none;
      }
      .wrapper-profile-box {
        width: 100%;
        margin: 0;
      }
    }
  }
}
</style>

